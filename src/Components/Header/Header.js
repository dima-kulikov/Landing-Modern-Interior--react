import React from 'react';
import "../Header/Header.scss"

function Header() {

function handleClick() {
    let btnMobMenu = document.querySelector('.btn-mob-menu');
    let nav = document.querySelector('.nav');
        nav.classList.toggle('nav--active');
        btnMobMenu.classList.toggle('btn-mob-menu--active');
}



    return(
        <header>
            <div className="wrapper">
                <div className="header__block">
                    <div className="header__logo">Furni.</div>
                    <div className='btn-mob-menu' onClick={handleClick}>
                        <div className='burger burger-1'></div>
                        <div className='burger burger-2'></div>
                        <div className='burger burger-3'></div>
                    </div>
                        <nav className='nav'>
                            <ul className="header__list">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">about us</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contac us</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="header__info">
                        <div className="header__info--text">
                            <h1>Modern Interior Design Studio</h1>
                            <div className="header__info--text__btn">
                                <button className="btn">Shop Now</button>
                                <button className="btn">Explore</button>
                            </div>
                        </div>
                        <div className="header__info--img">
                        <img src="/img/header.png" alt="img"/>
                        
                        </div>
                    </div>
                </div>
                <img src="./img/capttch.jpg" alt="" />
        </header>
    )
}
export default Header;