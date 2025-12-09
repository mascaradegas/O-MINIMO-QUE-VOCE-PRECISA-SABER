import express from 'express';
import { config } from 'dotenv';
import Database from 'better-sqlite3';
import cors from 'cors';

// Load environment variables
config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://localhost:5173', // URL do frontend
  credentials: true
}));

app.use(express.json());

// Middleware
app.use(express.json());

// Database setup
const db = new Database('dev.db');

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT,
    whatsapp TEXT NOT NULL,
    city TEXT,
    level TEXT,
    goal TEXT,
    schedule TEXT,
    message TEXT,
    status TEXT DEFAULT 'new',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS courses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    price REAL NOT NULL,
    lessons INTEGER DEFAULT 108,
    active INTEGER DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS modules (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    course_id INTEGER NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    module_order INTEGER NOT NULL,
    lessons INTEGER NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (course_id) REFERENCES courses(id)
  );
`);

console.log('✅ Database tables created');

// Insert sample data if empty
const courseCount = db.prepare('SELECT COUNT(*) as count FROM courses').get();
if (courseCount.count === 0) {
  // Insert course
  const insertCourse = db.prepare(`
    INSERT INTO courses (title, description, price, lessons)
    VALUES (?, ?, ?, ?)
  `);
  
  const result = insertCourse.run(
    'O Mínimo que Você Precisa pra se Virar nos EUA',
    'Inglês prático para brasileiros que vivem ou querem viver nos Estados Unidos',
    297.00,
    108
  );
  
  const courseId = result.lastInsertRowid;
  
  // Insert modules
  const modules = [
    { title: 'MÓDULO 1 – SOBREVIVÊNCIA IMEDIATA', lessons: 10, order: 1 },
    { title: 'MÓDULO 2 – COMIDA E BEBIDA', lessons: 13, order: 2 },
    { title: 'MÓDULO 3 – TRABALHO', lessons: 10, order: 3 },
    { title: 'MÓDULO 4 – DINHEIRO E COMPRAS', lessons: 12, order: 4 },
    { title: 'MÓDULO 5 – MORADIA E DIA A DIA', lessons: 10, order: 5 },
    { title: 'MÓDULO 6 – TECNOLOGIA E COMUNICAÇÃO', lessons: 10, order: 6 },
    { title: 'MÓDULO 7 – TRANSPORTE', lessons: 13, order: 7 },
    { title: 'MÓDULO 8 – CONVERSAS', lessons: 13, order: 8 },
    { title: 'MÓDULO 9 – EMERGÊNCIAS', lessons: 10, order: 9 },
    { title: 'MÓDULO 10 – BUROCRACIA', lessons: 15, order: 10 }
  ];
  
  const insertModule = db.prepare(`
    INSERT INTO modules (course_id, title, module_order, lessons)
    VALUES (?, ?, ?, ?)
  `);
  
  for (const mod of modules) {
    insertModule.run(courseId, mod.title, mod.order, mod.lessons);
  }
  
  console.log('✅ Sample data inserted');
}

// ========================================
// ROUTES
// ========================================

// Health check
app.get('/', (req, res) => {
  res.json({ 
    message: 'API is running! 🚀',
    database: 'SQLite (better-sqlite3)'
  });
});

// Get all courses
app.get('/api/courses', (req, res) => {
  try {
    const courses = db.prepare(`
      SELECT * FROM courses WHERE active = 1
    `).all();
    
    // Get modules for each course
    const getModules = db.prepare(`
      SELECT * FROM modules WHERE course_id = ? ORDER BY module_order
    `);
    
    const coursesWithModules = courses.map(course => ({
      ...course,
      modules: getModules.all(course.id)
    }));
    
    res.json(coursesWithModules);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
});

// Get course by ID
app.get('/api/courses/:id', (req, res) => {
  try {
    const course = db.prepare('SELECT * FROM courses WHERE id = ?').get(req.params.id);
    
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }
    
    const modules = db.prepare(`
      SELECT * FROM modules WHERE course_id = ? ORDER BY module_order
    `).all(course.id);
    
    res.json({ ...course, modules });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch course' });
  }
});

// Create lead (form submission)
app.post('/api/leads', (req, res) => {
  try {
    const { name, email, whatsapp, city, level, goal, schedule, message } = req.body;
    
    if (!name || !whatsapp) {
      return res.status(400).json({ error: 'Nome e WhatsApp são obrigatórios' });
    }
    
    const insert = db.prepare(`
      INSERT INTO leads (name, email, whatsapp, city, level, goal, schedule, message)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);
    
    const result = insert.run(name, email, whatsapp, city, level, goal, schedule, message);
    
    res.status(201).json({
      success: true,
      message: 'Inscrição recebida! Você receberá uma mensagem no WhatsApp em breve.',
      lead: {
        id: result.lastInsertRowid,
        name,
        whatsapp
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao processar inscrição' });
  }
});

// Get all leads (admin)
app.get('/api/leads', (req, res) => {
  try {
    const leads = db.prepare(`
      SELECT * FROM leads ORDER BY created_at DESC
    `).all();
    
    res.json(leads);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch leads' });
  }
});

// Get lead by ID
app.get('/api/leads/:id', (req, res) => {
  try {
    const lead = db.prepare('SELECT * FROM leads WHERE id = ?').get(req.params.id);
    
    if (!lead) {
      return res.status(404).json({ error: 'Lead not found' });
    }
    
    res.json(lead);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch lead' });
  }
});

// Update lead status
app.patch('/api/leads/:id/status', (req, res) => {
  try {
    const { status } = req.body;
    
    if (!['new', 'contacted', 'converted'].includes(status)) {
      return res.status(400).json({ error: 'Status inválido' });
    }
    
    const update = db.prepare('UPDATE leads SET status = ? WHERE id = ?');
    const result = update.run(status, req.params.id);
    
    if (result.changes === 0) {
      return res.status(404).json({ error: 'Lead not found' });
    }
    
    res.json({ success: true, message: 'Status atualizado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update lead' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`📂 Database: dev.db (SQLite)`);
  console.log(`🎯 Ready to receive leads!`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  db.close();
  console.log('\n👋 Database closed. Server stopped.');
  process.exit(0);
});