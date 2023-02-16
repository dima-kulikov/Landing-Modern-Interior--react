import "../Modern/Modern.scss"

function Modern() {
    return (
        <div className="wrapper">
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

                </div>
            </div>
        </div>
    )
}

export default Modern;