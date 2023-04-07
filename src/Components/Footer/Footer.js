import React from 'react';
import '../Footer/Footer.scss';

function Footer() {
    return(
        <footer className='wrapper'>
            <div id='contact'></div>
        <div className="subscribe">
        <div className="subscribe__title">Subscribe to Newsletter</div>
        <form className='footer__form'>
            <input className='footer__form--input' type="text" placeholder="Enter your name"/>
            <input className='footer__form--input' type="email" placeholder="Enter your e-mail"/>
            <button className='footer__form--btn'>
                <img src="../img/icon/telega.png" alt="img" />
            </button>
        </form>
        <img src="./img/chair.png" alt="" className="subscribe__chair" />
        </div>

        <div className="footer-info">

            <div className="footer-info--title">Furni..</div>

            <div className="footer-info--list">
                <div className="footer-info--list__item">Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for us to know what was to be done. the this is a long  post for the text.`This small text has to be place here, since this is </div>
                <div className="footer-info--list__item">
                    <div>About us</div>
                    <div>Services</div>
                    <div>Blog</div>
                    <div>Contact us</div>
                </div>
                <div className="footer-info--list__item">
                    <div>Support</div>
                    <div>Knowledge base</div>
                    <div>Live chat</div>
                </div>
                <div className="footer-info--list__item">
                    <div>Jobs</div>
                    <div>Our team</div>
                    <div>Leadership</div>
                    <div>Privacy Policy</div>
                </div>
                <div className="footer-info--list__item">
                    <div>Nordic Chair</div>
                    <div>Kruzo Aero</div>
                    <div>Ergonomic</div>
                </div>
            </div>


            <div className="footer-info-social">
                <div>
                    <img src="../img/icon/f.svg" alt="icon" />
                </div>
                <div>
                    <img src="../img/icon/i.svg" alt="icon" />
                </div>
                <div>
                    <img src="../img/icon/t.svg" alt="icon" />
                </div>
                <div>
                    <img src="../img/icon/in.svg" alt="icon" />
                </div>
            </div>

            <div className="footer__Copyright">
                <div>Copyright 2022 degraft87@gmail.com. All Rights Reserved.</div>
                <div className='footer__Copyright--second'>
                    <div>Terms & Conditions</div>
                    <div>Privacy Policy</div>
                </div>
            </div>

        </div>


        </footer>
    )
    
};

export default Footer;