import React from 'react'

class ProductSingle extends React.Component {
    constructor(){
        super();
        this.state = {
            product: {
                product: '',
                images: '',
                make: ''
            }
        }
    }
    componentDidMount(){
        fetch('http://localhost:8000/api/product/')
        .then(results => results.json())
        .then(data =>{
            console.log(data);
            
            let product = data.find(product => product.id === Number(this.props.match.params.id) ? product : null)
            this.setState({product})
        })
    }
    render(){
        let product = this.state.product
        return (
            <div className="container11">
                <div className="row">
                    <div className="vehicle-name col-sm-6">
                        <img className="img-responsive" src={`/${product.make.toLowerCase()}/${product.images}`} />
                        <h2>Vehicle Name: {product.product}</h2>
                    </div>
                    <div className="vehicle-info1 col-sm-6" style={{marginTop: '50px'}}>
                        <p>Base Rate $</p>
                        <p>Mileage $</p>
                        <p>Offer Codes $</p>
                        <p>Fees and Taxes $</p>
                        <p>Estimated Total $</p>
                    </div>
                </div>
                <hr className="line-breaker1"/>
                <h2 style={{color: 'white' , textAlign: 'center'}}>Protection & Coverages</h2>
                <div className="coverages2 row">
                    <div className="col-sm-3">
                        <p>Cover The Car </p>
                    </div>
                    <div className="col-sm-1">
                        <label className="container1">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark1"></span><p style={{marginLeft: '16px'}}>$1,200.99</p>
                        </label>
                    </div>
                    <div className="col-sm-3">
                        <p>Cover Myself </p>
                    </div>
                    <div className="col-sm-1">
                        <label className="container1">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark1"></span><p style={{marginLeft: '16px'}}>$456.99</p>
                        </label>
                    </div>
                
                    <div className="col-sm-3">
                        <p>Cover My Liability</p>
                    </div>
                    <div className="col-sm-1">
                        <label className="container1">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark1"></span><p style={{marginLeft: '16px'}}>$622.99</p>
                        </label>
                    </div>
                </div>
                <div className="creditCardForm1">
                    <div className="heading">
                        <h1>Confirm Purchase</h1>
                    </div>
                    <div className="payment">
                        <form>
                            <div className="form-group owner">
                                <label htmlFor="owner">Card Name</label>
                                <input type="text" className="form-control" id="owner" required="required" />
                            </div>
                            <div className="form-group CVV">
                                <label htmlFor="cvv">CVV</label>
                                <input type="text" className="form-control" id="cvv" required="required" minLength="3" maxLength="4" />
                            </div>
                            <div className="form-group" id="card-number-field">
                                <label htmlFor="cardNumber">Card Number</label>
                                <input type="text" className="form-control" id="cardNumber" required="required" maxLength="20" />
                            </div>
                            <div className="form-group" id="expiration-date" >
                                <label>Expiration Date</label>
                                <select>
                                    <option value="01">January</option>
                                    <option value="02">February </option>
                                    <option value="03">March</option>
                                    <option value="04">April</option>
                                    <option value="05">May</option>
                                    <option value="06">June</option>
                                    <option value="07">July</option>
                                    <option value="08">August</option>
                                    <option value="09">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>
                                <select>
                                    <option value="16"> 2016</option>
                                    <option value="17"> 2017</option>
                                    <option value="18"> 2018</option>
                                    <option value="19"> 2019</option>
                                    <option value="20"> 2020</option>
                                    <option value="21"> 2021</option>
                                </select>
                            </div>
                            <div className="card-logos row">
                                <img className="img-responsive" src="img/card-logos.gif" />
                            </div>
                            <div className="form-group" id="pay-now">
                                <button type="submit" className="btn btn-default" id="confirm-purchase">Confirm</button><button type="submit" className="btn btn-default" id="cancel-purchase">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>    
            </div>        
        )
    }
}

export default ProductSingle
