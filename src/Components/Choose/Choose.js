import "../Choose/Choose.scss"

function Choose() {
    return(
        <div className="wrapper">
            <div className="choose">
                <div className="choose__info">
                    <div className="choose__info__top">
                        <div className="choose__info__top--title">Why Choose Us</div>
                        <div className="choose__info__top--text">Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for us to know what was to be done. the</div>
                    </div>
                    <div className="choose__info__plus">
                        <div className="choose__info__plus__item">
                            <div className="choose__info__plus__item--icon">
                                <img src="./img/icon/truck.png" alt="" />
                            </div>
                            <div className="choose__info__plus__item--title">
                            Fast  & Free Shipping
                            </div>
                            <div className="choose__info__plus__item--text"></div>
                        </div>
                    </div>
                </div>
                <img src="./img/choose.png" alt="choose" />
            </div>
        </div>
    )
}

export default Choose;