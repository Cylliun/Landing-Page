import React from 'react';
import AboutCompany from './style'; // Supondo que você tenha um styled component ou módulo CSS
import logo from '../../assets/img/cara-do-compiuter-removebg-preview.png';

function Section() {
    return (
        <AboutCompany>
            <main>
                <section>
                    <div className='table table-text'>
                        <h1>Os melhores serviços estão aqui</h1>
                        <p>Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão.
                        Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500</p>
                    </div>

                    <div className='table table-img'>
                        <img src={logo} alt='Logo da Empresa' />
                    </div>
                </section>
            </main>
        </AboutCompany>
    );
}

export default Section;
