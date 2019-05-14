import React from 'react'

class Make extends React.Component {
    constructor(){
        super();
        this.state = {
            products: []
        }
    }
    componentDidMount(){
        fetch('http://localhost:8000/api/product/make/' + this.props.match.params.make)

        .then(results => results.json())
        .then(data =>{
            //  get the data and setting the state into the empty products array
            this.setState({products:data})
        })
    }
    render(){
        let make = this.props.match.params.make.toLowerCase()
        let products = this.state.products.map((product) => {
            return (
                <div key={product.id} className="col-sm-4">
                    <h3 className="car-name">{product.product}</h3>                
                    <div className="slide">
                        <img className="img-responsive" src={`/${make}/${product.images}`} />
                    </div> 
                    <div className="col-sm-6">
                        <h3 className="weekly-rent">Weekly</h3>
                        <button><a href={`/product/${product.id}`} >Rent Now</a></button>
                    </div>
                    <div className="col-sm-6">
                        <h3 className="business-rent">Buisness Rentals</h3>
                        <button><a href=""></a>Rent Now</button>
                    </div>
                </div>
            )
        })
        return (
            <div id="maserati-body">
                <div className="container">
                    <div className="selection1 row">
                        {products}
                    </div>
                </div>
            </div>
        )
    }
   
}

export default Make
