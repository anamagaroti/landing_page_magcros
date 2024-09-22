import { useState } from 'react';
import logo from '../../images/logo.svg';
import './style.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="App-header">
      <div>
        <img src={logo} alt="logo da empresa magcros, letras brancas e icone na cor azul, tipo um espiral" />
      </div>

      {/* Botão Hamburger para telas menores */}
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>

      <div className={`links-menu-div ${isMenuOpen ? 'open' : ''}`}>
        <a className="links-menu" href="https://google.com">O que é a Magcros?</a>
        <a className="links-menu" href="https://google.com">Soluções</a>
        <a className="links-menu" href="https://google.com">Para Empresas</a>
        <button type="button">Login</button>
      </div>
    </header>
  );
}

export default Header;
