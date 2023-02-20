import React from 'react';
import '../Footer/Footer.scss';

function Footer() {
    return(
        <footer className='wrapper subscribe'>
        <img src="./img/chair.png" alt="" className="subscribe__chair" />

        <div className="subscribe__title">Subscribe to Newsletter</div>
        <from className='footer__form'>
            <input className='footer__form--input' type="text" placeholder="Enter your name"/>
            <input className='footer__form--input' type="email" placeholder="Enter your e-mail"/>
            <button className='footer__form--btn'>
                <img src="../img/icon/telega.png" alt="img" />
            </button>
        </from>

        </footer>
    )
    
};

export default Footer;