import React from 'react'
import Slider from 'react-slick'

class Home extends React.Component{
    render(){
        const homeslider={
            className: 'slick-slider ads',
            infinite: true,
            dots:false,
            arrows:false,
            slidesToShow: 2,
            slidesToScroll: 1, 
            autoplay: true,
            autoplaySpeed: 3000
        }
        return (
            <>
                {/* <!-- Booking section --> */}
                <div className="big-pic">
                    <div className="container">
                    {/* <!-- <img className="img-responsive" src="img/sketch.jpg">   --> */}
                        <div className="row">
                            <div className="mid-section col-xs-12 col-sm-12 col-md-12 ">
                                <p>Book at Exotic.com for The Best Guarenteed!</p>
                            </div>
                        </div>
                    </div>
                    <div className="input-background">
                        <div className="midcenter1 container">
                            <div className="row">
                                <div className="col-xs-4 col-sm-4 col-md-4">
                                    <form>
                                        <input type="text" name="inputBox" placeholder="Enter your pick-up location" /><i className="fas fa-map-marker-alt" style={{color:'black'}} ></i>
                                        {/* <!-- location section    --> */}
                                    </form>
                                </div>
                                <div className="col-sm-4 col-md-4">
                                    <input type="datetime-local" name="bdaytime" />
                                    <input type="submit" value="Send" />{/*<!-- calendar here --> */}
                                </div>
                                <div className="col-xs-4 col-sm-4 col-md-4">
                                    <select>
                                        <option value="midnight">midnight</option>
                                        <option value="12:30 AM">12:30 AM</option>
                                        <option value="1:00 AM">1:00 AM</option>
                                        <option value="1:30 AM">1:30 AM</option>
                                        <option value="12:30 AM">2:00 AM</option>
                                        <option value="1:00 AM">2:30 AM</option>
                                        <option value="1:30 AM">3:00 AM</option>
                                        <option value="12:30 AM">3:30 AM</option>
                                        <option value="1:00 AM">4:00 AM</option>
                                        <option value="1:30 AM">4:30 AM</option>
                                        <option value="12:30 AM">5:00 AM</option>
                                        <option value="1:00 AM">5:30 AM</option>
                                        <option value="1:30 AM">6:00 AM</option>
                                        <option value="12:30 AM">6:30 AM</option>
                                        <option value="1:00 AM">7:00 AM</option>
                                        <option value="1:30 AM">8:30 AM</option>
                                        <option value="12:30 AM">9:00 AM</option>
                                        <option value="1:00 AM">9:30 AM</option>
                                        <option value="1:30 AM">10:00 AM</option>
                                        <option value="12:30 AM">10:30 AM</option>
                                        <option value="1:00 AM">11:00 AM</option>
                                        <option value="1:30 AM">11:30 AM</option>
                                        <option value="noon">noon</option>
                                        <option value="12:30 AM">12:30 PM</option>
                                        <option value="1:00 AM">1:00 PM</option>
                                        <option value="1:30 AM">1:30 PM</option>
                                        <option value="12:30 AM">2:00 PM</option>
                                        <option value="1:00 AM">2:30 PM</option>
                                        <option value="1:30 AM">3:00 PM</option>
                                        <option value="12:30 AM">3:30 PM</option>
                                        <option value="1:00 AM">4:00 PM</option>
                                        <option value="1:30 AM">4:30 PM</option>
                                        <option value="12:30 AM">5:00 PM</option>
                                        <option value="1:00 AM">5:30 PM</option>
                                        <option value="1:30 AM">6:00 PM</option>
                                        <option value="12:30 AM">6:30 PM</option>
                                        <option value="1:00 AM">7:00 PM</option>
                                        <option value="1:30 AM">8:30 PM</option>
                                        <option value="12:30 AM">9:00 PM</option>
                                        <option value="1:00 AM">9:30 PM</option>
                                        <option value="1:30 AM">10:00 PM</option>
                                        <option value="12:30 AM">10:30 PM</option>
                                        <option value="1:00 AM">11:00 PM</option>
                                        <option value="1:30 AM">11:30 PM</option>
                                    </select><i className="fas fa-clock" style={{color:'black'}}></i>
                                </div>
                            </div>
                        </div>
                        <div className="midcenter2 container">
                            <div className="row">
                                <div className="col-xs-4 col-sm-4 col-md-4">
                                    <form>
                                        <input type="text" name="inputBox" placeholder="Return to same location" /><i className="fas fa-map-marker-alt" style={{color:'black'}}></i>       
                                        {/* <!-- location here --> */}
                                    </form>
                                </div>
                                <div className="col-xs-4 col-sm-4 col-md-4">
                                    <input type="datetime-local" name="bdaytime" />
                                    <input type="submit" value="Send" />{/*<!-- calendar here --> */}
                                </div>
                                <div className="col-xs-4 col-sm-4 col-md-4">
                                    <select>
                                        <option value="midnight">midnight</option>
                                        <option value="12:30 AM">12:30 AM</option>
                                        <option value="1:00 AM">1:00 AM</option>
                                        <option value="1:30 AM">1:30 AM</option>
                                        <option value="12:30 AM">2:00 AM</option>
                                        <option value="1:00 AM">2:30 AM</option>
                                        <option value="1:30 AM">3:00 AM</option>
                                        <option value="12:30 AM">3:30 AM</option>
                                        <option value="1:00 AM">4:00 AM</option>
                                        <option value="1:30 AM">4:30 AM</option>
                                        <option value="12:30 AM">5:00 AM</option>
                                        <option value="1:00 AM">5:30 AM</option>
                                        <option value="1:30 AM">6:00 AM</option>
                                        <option value="12:30 AM">6:30 AM</option>
                                        <option value="1:00 AM">7:00 AM</option>
                                        <option value="1:30 AM">8:30 AM</option>
                                        <option value="12:30 AM">9:00 AM</option>
                                        <option value="1:00 AM">9:30 AM</option>
                                        <option value="1:30 AM">10:00 AM</option>
                                        <option value="12:30 AM">10:30 AM</option>
                                        <option value="1:00 AM">11:00 AM</option>
                                        <option value="1:30 AM">11:30 AM</option>
                                        <option value="noon">noon</option>
                                        <option value="12:30 AM">12:30 PM</option>
                                        <option value="1:00 AM">1:00 PM</option>
                                        <option value="1:30 AM">1:30 PM</option>
                                        <option value="12:30 AM">2:00 PM</option>
                                        <option value="1:00 AM">2:30 PM</option>
                                        <option value="1:30 AM">3:00 PM</option>
                                        <option value="12:30 AM">3:30 PM</option>
                                        <option value="1:00 AM">4:00 PM</option>
                                        <option value="1:30 AM">4:30 PM</option>
                                        <option value="12:30 AM">5:00 PM</option>
                                        <option value="1:00 AM">5:30 PM</option>
                                        <option value="1:30 AM">6:00 PM</option>
                                        <option value="12:30 AM">6:30 PM</option>
                                        <option value="1:00 AM">7:00 PM</option>
                                        <option value="1:30 AM">8:30 PM</option>
                                        <option value="12:30 AM">9:00 PM</option>
                                        <option value="1:00 AM">9:30 PM</option>
                                        <option value="1:30 AM">10:00 PM</option>
                                        <option value="12:30 AM">10:30 PM</option>
                                        <option value="1:00 AM">11:00 PM</option>
                                        <option value="1:30 AM">11:30 PM</option>
                                    </select><i className="fas fa-clock" style={{color:'black'}}></i>
                                </div>
                            </div>
                        </div>
                        <div className="last-bar container">
                            <div className="row">
                                <div className="personal-info1 col-xs-4 col-sm-4 col-md-4">
                                    <input type="text" name="number" value="Age:" readOnly />
                                <select>
                                        <option value="25">25+</option>
                                        <option value="24">24</option>
                                        <option value="23">23</option>
                                        <option value="22">22</option>
                                        <option value="21">21</option>
                                        <option value="20">20</option>
                                        <option value="19">19</option>
                                        <option value="18">18</option>
                                    </select>
                                </div>
                                <div className="personal-info2 col-xs-4 col-sm-4 col-md-4" >
                                    <input type="text" name="number" value="I live in:" readOnly />
                                    <select>
                                        <option value="Canada">Canada</option>
                                        <option value="United Kingdom (UK)">United Kingdom (UK)</option>
                                        <option value="United Sates of America (USA)">United Sates of America (USA)</option>
                                    </select>
                                </div>
                                <div className="car-type col-sm-4 col-md-4">
                                    <input type="text" name="inputBox" value="Vehicle Type*" readOnly />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="bottom-button-wrapper row">
                            <div className="bottom-button col-xm-12 col-sm-12 col-md-12 ">
                                <button><a href="/CarSales">Select My Car</a></button>
                            </div>
                        </div>
                    </div>
                </div>


                <hr />
                <div className="container">
                    <div className="row">
                        <div className="exotic-team col-xs-12 col-sm-12 col-md-12 ">
                            <h2>Meet the Exotic Team</h2>  
                        </div>
                    </div>
                </div>
                
                <div className="team-members container">
                    <div className="col-xs-12 col-sm-12 col-md-12 ">
                        <div className="swolcott">
                            <img className="img-responsive"  src="img/stephen.png" />
                            <h2>Stephen Wolcott - CEO</h2>
                            <p>Overseeing all operations and business activities to ensure we produce <br />the desired results and are consistent with the overall strategy and mission.</p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6">
                        <div className="dgolden">
                            <img className="img-responsive"  src="img/daisha.png" />
                            <h2>Daisha Golden - Chief of Design</h2>
                            <p>Oversees all aspects of design dealing with the company's products and services<br />including the user expierence design, product design, graphic design, and etc.</p>    
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6">
                        <div className="jkingston">
                            <img className="img-responsive"  src="img/jalon.png" />
                            <h2>Jalon Kingston - Chief of Operations</h2>
                            <p> Oversees the company's business operations and reports to the CEO, <br />ensures the company has effective operational and financial procedures in place.</p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6">
                        <div className="dmcelroy">
                            <img className="img-responsive"  src="img/dmichael.png" />
                            <h2>D'Michael McElroy - Chief of Compliance</h2>
                            <p> Responsible for fixing necessary issues that may occur, also implementing policies and procedures to assure compliance with applicable local, state and federal laws and regulations and third party guidelines.</p>    
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6">
                        <div className="jjordan">
                            <img className="img-responsive"  src="img/jalen.png" />
                            <h2>Jalen Jordan - Chief of Metadata</h2>
                            <p>Responsible enabling the enterprise data strategies by providing unified approaches and processes including: data quality, metadata, and etc.</p>
                        </div>
                    </div>
                </div>
                <Slider {...homeslider}>
                    <div><img className="img-responsive"  src="img/ad-1.png" alt="ads" /></div>
                    <div><img className="img-responsive" src="img/ad-2.png" alt="ads" /></div>
                    <div><img className="img-responsive"  src="img/ad-1.png" alt="ads" /></div>
                </Slider>
            </>        
        )
    }
}

export default Home