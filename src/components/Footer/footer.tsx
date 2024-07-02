import React from "react";
import Footer from "./style";

function rodaPé () {
    return(
        <Footer>
            <div className="container">

                <ul>
                    <h3>Empresa TI</h3>
                    <br/>
                    
                    <div className="redes-sociais">
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Whatsaap</a></li>
                    </div>
                </ul>

                <ul>
                    <h3>Inicio</h3>
                    <br/>

                    <li><a href="#">Sobre a Empresa</a></li>
                    <li><a href="#">Produtos</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>

                <ul>
                    <h3>Suporte</h3>
                    <br/><br/>

                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Chat</a></li>
                </ul>
            </div>
            <p className="final">&copy; 2024 - Todos os direitos reservados - Empresa TI</p>
        </Footer>
    );
};

export default rodaPé;