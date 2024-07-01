import React from 'react';
import Container from './style';

function Header() {
  return (
    <Container>
        <nav>
            <h2 id='logo'>Logo</h2>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#aboutUs">Sobre Nós</a></li>
                <li><a href="#services">Serviços</a></li>
                <li><a href="#contacts">Contatos</a></li>
            </ul>
            <a href="#login" id='login'>Login</a>
        </nav>
    </Container>
  );
}

export default Header;
