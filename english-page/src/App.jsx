import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Componentes Base
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

// paginas
import HomePageContent from "./components/pages/HomePageContent.jsx";


import './App.css'; 

const App = () => {
    return (
        <Router>
            <div className="english-page">
        
                <Header /> 
        
                <Routes>
                    {/* ROTA PRINCIPAL: Carrega o design de Perfil Centralizado */}
                    <Route path="/" element={<HomePageContent />} /> 
          
                    {/* OUTRAS ROTAS (Pages) */}          
                </Routes>

                <Footer /> 
            </div>
        </Router>
    );
};

export default App;