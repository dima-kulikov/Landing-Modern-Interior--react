import React from 'react';
import "../Modern/Modern.scss"

function Modern() {
    return (
        <div className="wrapper">
            <div id='services'></div>
            <div className="modern">
                <div className="modern__gallery">
                    <img src="./img/modern.png" alt="modern" />
                </div>
                <div className="modern__info">

                    <div className="modern__info--header">
                        <div className="modern__info--header__title">
                        We help you make <br/> Modern Interior Design
                        </div>
                        <div className="modern__info--header__desc">
                        Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for us to know what was to be done. the this is a long  post for the text.`This small text has to be place here, since this is a place holder. You can also chane it.
                        </div>
                    </div>

                    <ul className="modern__info--list">
                        <li>Donec mattis porta eros,let aliquet finibus ri</li>
                        <li>Donec mattis porta eros,let aliquet finibus ri</li>
                        <li>Donec mattis porta eros,let aliquet finibus ri</li>
                        <li>Donec mattis porta eros,let aliquet finibus ri</li>
                    </ul>

                    <button className="btn black__btn">Explore</button>
                </div>
            </div>

            <ul className="three-chairs">

                <li className="three-chairs__item">
                    <img src="./img/three-chairs-1.png" alt="Nordic" />
                    <div className="three-chairs__item__text">
                        <div className="three-chairs__item__text--title">Nordic Chair</div>
                        <div className="three-chairs__item__text--desc">Donec mattis porta eros, aliquet finibus risus in. Donecd </div>
                        {/* <a href="#" className="three-chairs__item__text--href">Read more</a> */}
                    </div>
                </li>

                <li className="three-chairs__item">
                    <img src="./img/three-chairs-2.png" alt="Kruzi Aero" />
                    <div className="three-chairs__item__text">
                        <div className="three-chairs__item__text--title">Kruzi Aero</div>
                        <div className="three-chairs__item__text--desc">Donec mattis porta eros, aliquet finibus risus in. Donecd </div>
                        {/* <a href="#" className="three-chairs__item__text--href">Read more</a> */}
                    </div>
                </li>

                <li className="three-chairs__item">
                    <img src="./img/three-chairs-3.png" alt="Ergonomic Chair" />
                    <div className="three-chairs__item__text">
                        <div className="three-chairs__item__text--title">Ergonomic Chair</div>
                        <div className="three-chairs__item__text--desc">Donec mattis porta eros, aliquet finibus risus in. Donecd </div>
                        {/* <a href="#" className="three-chairs__item__text--href">Read more</a> */}
                    </div>
                </li>

            </ul>
        </div>
    )
}

export default Modern;