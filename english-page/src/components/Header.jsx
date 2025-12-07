import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header = () => {
  return (
    <header className="headerContainer">
      <div className="nav-inner">
        <div className="logo">
          <div className="logo-badge">🇺🇸</div>
          <div>
            <div>O MÍNIMO</div>
            <div
              style={{
                fontSize: "0.75rem",
                color: "#9ca3af",
                textTransform: "none"
              }}
            >
              pra se virar nos EUA
            </div>
          </div>
        </div>

        <div className="nav-links">
          <a href="#sobre">Sobre</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#modulos">Módulos</a>
          <a href="#resultado">Resultado</a>

          <a className="btn btn-primary nav-cta" href="#formulario">
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
