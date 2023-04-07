import React from 'react';
import "../Choose/Choose.scss"

function Choose() {
    return(
        <div className="wrapper">
            <div id='about'></div>
            <div className="choose">
                <div className="choose__info">
                    <div className="choose__info__top">
                        <div className="choose__info__top--title">Why Choose Us</div>
                        <div className="choose__info__top--text">Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for us to know what was to be done. the</div>
                    </div>
                    <div className="choose__info__plus">

                        <div className="choose__info__plus__item">
                            <div className="choose__info__plus__item--icon">
                                <img src="./img/icon/truck.png" alt="truck" />
                            </div>
                            <div className="choose__info__plus__item--title">
                            Fast  & Free Shipping
                            </div>
                            <div className="choose__info__plus__item--text">
                            Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was
                            </div>
                        </div>

                        <div className="choose__info__plus__item">
                            <div className="choose__info__plus__item--icon">
                                <img src="./img/icon/shop-bag.png" alt="shop-bag" />
                            </div>
                            <div className="choose__info__plus__item--title">
                            Easy to Shop
                            </div>
                            <div className="choose__info__plus__item--text">
                            Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was
                            </div>
                        </div>

                        <div className="choose__info__plus__item">
                            <div className="choose__info__plus__item--icon">
                                <img src="./img/icon/support.png" alt="support" />
                            </div>
                            <div className="choose__info__plus__item--title">
                            24/7 Support
                            </div>
                            <div className="choose__info__plus__item--text">
                            Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was
                            </div>
                        </div>

                        <div className="choose__info__plus__item">
                            <div className="choose__info__plus__item--icon">
                                <img src="./img/icon/return.png" alt="return" />
                            </div>
                            <div className="choose__info__plus__item--title">
                            Hassle Free Returns
                            </div>
                            <div className="choose__info__plus__item--text">
                            Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was
                            </div>
                        </div>
                    </div>
                </div>
                <div className="choose__img">
                <img src="./img/choose.png" alt="choose" />
                </div>
                
            </div>
        </div>
    )
}

export default Choose;