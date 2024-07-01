import React from 'react';
import AboutCompany from './style';
import homemComputador from '../../assets/img/cara-do-compiuter-removebg-preview.png';

function Main() {
    return (
        <AboutCompany>
                <section>
                    <div className='table table-text'>
                        <h1>Para todo problema, existe uma solução pertinho de você</h1>
                        <p>Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão.
                        Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500</p>
                    </div>

                    <div className='table table-img'>
                        <img src={homemComputador} alt='Logo da Empresa' />
                    </div>
                </section>
        </AboutCompany>
    );
}
export default Main;