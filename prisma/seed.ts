import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  // Create course
  const course = await prisma.course.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: 'O Mínimo que Você Precisa pra se Virar nos EUA',
      description: 'Inglês prático para brasileiros que vivem ou querem viver nos Estados Unidos',
      price: 297.00,
      duration: 120,
      lessons: 108,
      active: true
    }
  });

  console.log(`✅ Course created: ${course.title}`);

  // Create modules
  const modules = [
    {
      courseId: course.id,
      title: 'MÓDULO 1 – SOBREVIVÊNCIA IMEDIATA',
      description: 'O essencial para os primeiros dias',
      order: 1,
      lessons: 10
    },
    {
      courseId: course.id,
      title: 'MÓDULO 2 – COMIDA E BEBIDA',
      description: 'Nunca mais passar fome ou sede',
      order: 2,
      lessons: 13
    },
    {
      courseId: course.id,
      title: 'MÓDULO 3 – TRABALHO',
      description: 'Consiga, mantenha e cresça no trabalho',
      order: 3,
      lessons: 10
    },
    {
      courseId: course.id,
      title: 'MÓDULO 4 – DINHEIRO E COMPRAS',
      description: 'Gerencie seu dinheiro com segurança',
      order: 4,
      lessons: 12
    },
    {
      courseId: course.id,
      title: 'MÓDULO 5 – MORADIA E DIA A DIA',
      description: 'Viva com independência',
      order: 5,
      lessons: 10
    },
    {
      courseId: course.id,
      title: 'MÓDULO 6 – TECNOLOGIA E COMUNICAÇÃO',
      description: 'Conecte-se ao mundo',
      order: 6,
      lessons: 10
    },
    {
      courseId: course.id,
      title: 'MÓDULO 7 – TRANSPORTE',
      description: 'Vá a qualquer lugar sozinho',
      order: 7,
      lessons: 13
    },
    {
      courseId: course.id,
      title: 'MÓDULO 8 – CONVERSAS',
      description: 'Conecte-se com pessoas',
      order: 8,
      lessons: 13
    },
    {
      courseId: course.id,
      title: 'MÓDULO 9 – EMERGÊNCIAS',
      description: 'Mantenha o controle quando tudo dá errado',
      order: 9,
      lessons: 10
    },
    {
      courseId: course.id,
      title: 'MÓDULO 10 – BUROCRACIA',
      description: 'Resolva tudo sozinho',
      order: 10,
      lessons: 15
    }
  ];

  for (const moduleData of modules) {
    const module = await prisma.module.create({
      data: moduleData
    });
    console.log(`✅ Module created: ${module.title}`);
  }

  // Create sample user
  const user = await prisma.user.upsert({
    where: { email: 'joao@example.com' },
    update: {},
    create: {
      name: 'João Silva',
      email: 'joao@example.com',
      phone: '+1 857 000 0000',
      city: 'Boston, MA',
      level: 'Começando do zero',
      goal: 'Trabalho / ganhar mais'
    }
  });

  console.log(`✅ User created: ${user.name}`);

  console.log('🌱 Seed completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });