import React from 'react'

class Products extends React.Component {
    constructor(){
        super();
        this.state = {
            products: []
        }
    }
    componentDidMount(){
        fetch('http://localhost:8000/api/product/make/Maserati')
        .then(results => results.json())
        .then(data =>{
            this.setState({products:data})
        })
    }
    render(){
        let products = this.state.products.map((product) => {
            return (
                <div class="col-sm-4">
                    <h3 className="car-name">{product.product}</h3>                
                    <div class="slide">
                        <img class="img-responsive" src="maseratis/ghibli.png" />
                    </div> 
                    <div class="col-sm-6">
                        <h3 className="weekly-rent">Weekly</h3>
                        <button><a href="/ProductSingle" >Rent Now</a></button>
                    </div>
                    <div class="col-sm-6">
                        <h3 className="business-rent">Buisness Rentals</h3>
                        <button><a href=""></a>Rent Now</button>
                    </div>
                </div>
            )
        })
        return (
            <div id="maserati-body">
                <div class="container">
                    <div class="selection1 row">
                        <div class="col-sm-4">
                            <h3 className="car-name">Ghibli</h3>                
                            <div class="slide">
                                <img class="img-responsive" src="maseratis/ghibli.png" />
                            </div> 
                            <div class="col-sm-6">
                                <h3 className="weekly-rent">Weekly</h3>
                                <button onclick="screen2();"><a href="checkout-process.html" >Rent Now</a></button>
                            </div>
                            <div class="col-sm-6">
                                <h3 className="business-rent">Buisness Rentals</h3>
                                <button><a href=""></a>Rent Now</button>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <h3 className="car-name">Granturismo</h3>    
                            <div class="slide">
                                <img class="img-responsive" src="maseratis/granturismo.png" />
                            </div> 
                            <div class="col-sm-6">
                                <h3 className="weekly-rent">Weekly</h3>
                                <button><a href=""></a>Rent Now</button>
                            </div>
                            <div class="col-sm-6">
                                <h3 className="business-rent">Buisness Rentals</h3>
                                <button><a href=""></a>Rent Now</button>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <h3 className="car-name">Quattroporte</h3>    
                            <div class="slide">
                                <img class="img-responsive" src="maseratis/quattroporte.png" />
                            </div>
                            <div class="col-sm-6">
                                <h3 className="weekly-rent">Weekly</h3>
                                <button><a href=""></a>Rent Now</button>
                            </div>
                            <div class="col-sm-6">
                                <h3 className="business-rent">Buisness Rentals</h3>
                                <button><a href=""></a>Rent Now</button>
                            </div>
                        </div>
                    </div>
                    <div class="selection2 row">
                        <div class="col-sm-4">
                            <h3 className="car-name">Gt-Covertible</h3>    
                            <div class="slide">
                                <img class="img-responsive" src="maseratis/gt-convertible.png" />
                            </div> 
                            <div class="col-sm-6">
                                <h3 className="weekly-rent">Weekly</h3>
                                <button><a href=""></a>Rent Now</button>
                            </div>
    
                            <div class="col-sm-6">
                                <h3 className="business-rent">Buisness Rentals</h3>
                                <button><a href="">Rent Now</a></button>
                            </div>                
                            
                        </div>
                        <div class="col-sm-4">
                            <h3 className="car-name">Levante</h3>    
                            <div class="slide">
                                <img class="img-responsive" src="maseratis/levante.png" /> 
                            </div> <div class="col-sm-6">
                                <h3 className="weekly-rent">Weekly</h3>
                                <button><a href=""></a>Rent Now</button>
                            </div>
                            <div class="col-sm-6">
                                <h3 className="business-rent">Buisness Rentals</h3>
                                <button><a href=""></a>Rent Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
   
}

export default Products
