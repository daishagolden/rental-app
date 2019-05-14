import React from 'react'

function header() {
    return (
        <>
            <div className="container">
                <div className="selection1 row">
                    <div className="col-sm-4">
                        <div className="slide">
                            <img class="img-responsive" src="maseratis/ghibli.png" />
                        </div> 
                        <div className="col-sm-6">
                            <h3>Weekly</h3>
                            <button><a href="checkout-process.html">Rent Now</a></button>
                        </div>
                        <div className="col-sm-6">
                            <h3>Buisness Rentals</h3>
                            <button><a href=""></a>Rent Now</button>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="slide">
                            <img class="img-responsive" src="maseratis/granturismo.png" />
                        </div> 
                        <div className="col-sm-6">
                            <h3>Weekly</h3>
                            <button><a href=""></a>Rent Now</button>
                        </div>
                        <div className="col-sm-6">
                            <h3>Buisness Rentals</h3>
                            <button><a href=""></a>Rent Now</button>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="slide">
                            <img className="img-responsive" src="maseratis/quattroporte.png" />
                        </div>
                        <div className="col-sm-6">
                            <h3>Weekly</h3>
                            <button><a href=""></a>Rent Now</button>
                        </div>
                        <div className="col-sm-6">
                            <h3>Buisness Rentals</h3>
                            <button><a href=""></a>Rent Now</button>
                        </div>
                    </div>
                </div>
                <div className="selection2 row">
                    <div className="col-sm-4">
                        <div className="slide">
                            <img className="img-responsive" src="maseratis/gt-convertible.png" />
                        </div> 
                        <div className="col-sm-6">
                            <h3>Weekly</h3>
                            <button><a href=""></a>Rent Now</button>
                        </div>

                        <div className="col-sm-6">
                            <h3>Buisness Rentals</h3>
                            <button><a href="">Rent Now</a></button>
                        </div>                
                        
                    </div>
                    <div className="col-sm-4">
                        <div className="slide">
                            <img className="img-responsive" src="maseratis/levante.png" /> 
                        </div> 
                        <div className="col-sm-6">
                            <h3>Weekly</h3>
                            <button><a href=""></a>Rent Now</button>
                        </div>
                        <div className="col-sm-6">
                            <h3>Buisness Rentals</h3>
                            <button><a href=""></a>Rent Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default header