import React from 'react'




function carsales() {
    return (
        <>
            <div className="selctions-1 container">
                <div className="maserati row col-sm-4">
                    <a href="/make/Maserati"><img src="img/maserati-overlay.jpg" alt="bugatti" className="category-image"  style={{height: '208px'}}/>
                    <div className="middle">
                        <div className="text">MASERATI</div>
                    </div></a>
                </div>
                <div className="porsche row col-sm-4">
                    <a href="/make/Porsche"><img src="img/porsche-overlay.jpg" alt="bugatti" className="category-image" />
                    <div className="middle">
                        <div className="text">PORSCHE</div>
                    </div></a>
                </div>
                <div className="bentley row col-sm-4">
                    <a href="/make/Bentley"><img src="img/bentley-overlay.jpg" alt="bugatti" className="category-image" />
                    <div className="middle">
                        <div className="text">BENTLEY</div>
                    </div></a>
                </div>
            </div>

            <div className="selections-2 container">
                <div className="audi row col-sm-4">
                    <a href="/make/Audi"><img src="img/audi-overlay.jpg" alt="bugatti" className="category-image" />
                    <div className="middle">
                        <div className="text">AUDI</div>
                    </div></a>
                </div>
                <div className="lamborghini row col-sm-4">
                    <a href="/make/Lamborghini"><img src="img/lamborghini-overlay.jpg" alt="bugatti" className="category-image" />
                    <div className="middle">
                        <div className="text">LAMBORGHINI</div>
                    </div></a>
                </div>
                <div className="bugatti row col-sm-4">
                    <a href="/make/Bugatti"><img src="img/bugatti-overlay.jpg" alt="bugatti" className="category-image" />
                    <div className="middle">
                        <div className="text">BUGATTI</div>
                    </div></a>
                </div>
            </div>

            <div className="selections-3 container">
                <div className="bmw row col-sm-4">
                    <a href="/make/Bmw"><img src="img/bmw-overlay.jpg" alt="bugatti" className="category-image" />
                    <div className="middle">
                        <div className="text">BMW</div>
                    </div></a>
                </div>
                <div className="agera row col-sm-4">
                    <a href="/make/Koenigsegg-Agera"><img src="img/agera-overlay.jpg" alt="bugatti" className="category-image" style={{height: '232px'}} />
                    <div className="middle">
                        <div className="text">KOENIGSEGG AGERA</div>
                    </div></a>
                </div>
                <div className="viper row col-sm-4">
                    <a href="/make/Dodge-Viper"><img src="img/viper-overlay.jpg" alt="bugatti" className="category-image" style={{height: '232px'}} />
                    <div className="middle">
                        <div className="text">DODGE VIPER</div>
                    </div></a>
                </div>
            </div>
        </>        
    )
}

export default carsales