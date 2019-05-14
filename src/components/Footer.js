import React from 'react'

function Footer() {
    return (
        <>
           {/* <!-- detailed informational bottom-bar  --> */}
            <div className="informational-bar">
                <div className="info-bar container">
                    <div className="info-headers row">
                        <div className=" col-sm-2">
                            <h3>Popular Searches</h3>
                            <ul>
                                <li><a href="">Moving Truck Rental</a></li>
                                <li><a href="">Long Term Car Rental</a></li>
                                <li><a href="">Free Upgrade Deal</a></li>
                                <li><a href="">Rental Car FAQ</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-2">
                            <h3>Popular Rental Cars</h3>
                            <ul>
                                <li><a href="">Luxury Car Rental</a></li>
                                <li><a href="">Bugatti Car Rental</a></li>
                                <li><a href="">Lamborghini Rental</a></li>
                                <li><a href="">Porshe Rental</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-2">
                            <h3>Popular US Destinations</h3> 
                            <ul>
                                <li><a href="">Car Rental Madison</a></li>
                                <li><a href="">Car Rental Flowood</a></li>
                                <li><a href="">Car Rental Ridgeland</a></li>
                                <li><a href="">Rental Car FAQ</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-2">
                            <h3>Budget Partners</h3>
                            <ul>
                                <li><a href="">Affiliates</a></li>
                                <li><a href="">Travel Agents</a></li>
                                <li><a href="">AARP Members</a></li>
                                <li><a href="">Military and Veterans</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-2">
                            <h3>Budget Support</h3>
                            <ul>
                                <li><a href="">Contact Us</a></li>
                                <li><a href="">Best Rate Guarantee</a></li>
                                <li><a href="">Roadside Assistance</a></li>
                                <li><a href="">Site Map</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-2">
                            <h3>Company Info</h3>    
                            <ul>
                                <li><a href="">About Exotic</a></li>
                                <li><a href="">Copyright Notices</a></li>
                                <li><a href="">Terms of Use</a></li>
                                <li><a href="">Privacy Notice</a></li>
                            </ul>              
                        </div>
                    </div>
                </div>
        
                <div className="container">
                    <div className="row">
                        <div className="country-language col-sm-6">
                            <select>
                                <option value="United Sates of America (USA)">United States</option>
                                <option value="Canada">Canada</option>
                                <option value="United Kingdom (UK)">United Kingdom (UK)</option>
                            </select>
                            <select style={{marginLeft: '4px' }} >
                                <option value="English">English</option>
                                <option value="Francais">Francais</option>
                                <option value="Espanol">Espanol</option>
                            </select>
                        </div>
                        <div className="social-media col-sm-6">
                            <ul>
                                <li><a href=""><i className="fab fa-twitter-square fa-2x"  style={{paddingLeft: '4px'}}></i></a></li>
                                <li><a href=""><i className="fab fa-facebook-square fa-2x"  style={{paddingLeft: '4px'}}></i></a></li>
                                <li><a href=""><i className="fab fa-linkedin fa-2x"  style={{paddingLeft: '4px'}}></i></a></li>
                                <li><a href=""><i className="fab fa-instagram fa-2x"  style={{paddingLeft: '4px'}}></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="copyright col-sm-12">
                           <p>© 2019 Exotic Rental Car Company, Inc.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer