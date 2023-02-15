import "../Header/Header.scss"

function Header() {
    return(
        <header>
            <div className="wrapper">
                <div className="header__block">
                    <div className="header__logo">Furni.</div>
                        <nav>
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
                                <button className="header__btn">Shop Now</button>
                                <button className="header__btn">Explore</button>
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