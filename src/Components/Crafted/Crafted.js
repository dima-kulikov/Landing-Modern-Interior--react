import React from 'react';
import "../Crafted/Crafted.scss"

function Crafted() {
    return(
        <div className="wrapper">
            <div className="crafted">
                <div className="crafted__info">
                    <h2>Crafted with excellent material.</h2>
                    <p>Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for us to know what was to be done.</p>
                    <button className="btn black__btn">Explore</button>
                </div>
                <div className="crafted__doods">

                    <div className="crafted__doods--item">
                        <img src="./img/crafted-1.png" alt="nordic" />
                        <div>
                            <div className="crafted__doods--item__title">Nordic CHAIR</div>
                            <div className="crafted__doods--item__price">$50.00</div>
                        </div>
                    </div>

                    <div className="crafted__doods--item">
                        <img src="./img/crafted-2.png" alt="Kruzo Aero Chair" />
                        <div>
                            <div className="crafted__doods--item__title">Kruzo Aero Chair</div>
                            <div className="crafted__doods--item__price">$78.00</div>
                        </div>
                    </div>

                    <div className="crafted__doods--item">
                        <img src="./img/crafted-3.png" alt="Ergonomic Chair" />
                        <div>
                            <div className="crafted__doods--item__title">Ergonomic Chair</div>
                            <div className="crafted__doods--item__price">$43.00</div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
export default Crafted;