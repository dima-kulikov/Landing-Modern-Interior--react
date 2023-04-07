// import React from 'react';
import React, { useEffect } from 'react';
import "../Header/Header.scss"

function Header() {

function handleClick() {
    let btnMobMenu = document.querySelector('.btn-mob-menu');
    let nav = document.querySelector('.nav');
        nav.classList.toggle('nav--active');
        btnMobMenu.classList.toggle('btn-mob-menu--active');
}
useEffect(() => {

window.onscroll = () => {
    if(window.scrollY > 600){
        document.querySelector('.scroll-up').classList.add('active-scroll-up');
    }else{
        document.querySelector('.scroll-up').classList.remove('active-scroll-up');
    }
}



const anchors = document.querySelectorAll('a[href*="#"]');
console.log(anchors)

    for( let anchor of anchors){
        anchor.addEventListener("click", (e)=>{
            e.preventDefault();
            document.querySelector('.btn-mob-menu').classList.remove('btn-mob-menu--active');
            document.querySelector('.nav').classList.remove('nav--active');

            const blockID = anchor.getAttribute('href');
            document.querySelector("" + blockID).scrollIntoView({
                behavior:"smooth",
                block:"start"
            }) 
        })
    }
})
    return(
        <header>
            <div className="wrapper">
                {/* scroll up */}
                <div className="scroll-up "><a href="#up">Up</a></div>
                <div id="up"></div>
                {/* header block */}
                <div className="header__block">
                    <div className="header__logo">Furni.</div>
                    <div className='btn-mob-menu' onClick={handleClick}>
                        <div className='burger burger-1'></div>
                        <div className='burger burger-2'></div>
                        <div className='burger burger-3'></div>
                    </div>
                    
                        <nav className='nav'>
                            <ul className="header__list">
                                <li><a href="#crafted">Crafted</a></li>
                                <li><a href="#about">about us</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#blog">Blog</a></li>
                                <li><a href="#contact">Contact us</a></li>
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