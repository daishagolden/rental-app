import React from 'react'

function header() {
    return (
        <>
            {/* <!-- very top bar on webpage --> */}
            <div className="container">
                <div className="row">
                    <div className="top-bar col-sm-10">
                        <ul>
                            <li><a href="/BusinessRentals">Business Rentals</a></li>
                            <li><a href="/CarSales">Car Sales</a></li>
                            <li><a href="/CustomerCare">Customer Care</a></li>
                        </ul>
                    </div>
                    <div className="signin-bar col-sm-2">
                        <button><a href="/Signin">Sign In</a></button><button><a href="/Register">Register</a></button>
                    </div>
                </div>
            </div>
            {/* <!-- drop-down bar information section --> */}
            <div className="container">
                <div className="row">
                    <div className="logo col-sm-6">
                        <img src="/img/logo.png" /><h1><a href="/">EXOTIC</a></h1> 
                    </div>
                    <div className="mid-bar col-sm-6">
                        <div className="dropdown">
                            <button className="dropbtn">Reservations</button>
                            <div className="dropdown-content">
                                <a href="#">Make a Reservation </a>
                                <a href="#">View/Modify/Cancel</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="dropbtn">Deals</button>
                            <div className="dropdown-content">
                                <a href="#">US Deals</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="dropbtn">Locations</button>
                            <div className="dropdown-content">
                                <a href="#">All US Locations</a>
                                <a href="#">Top Airport Locations</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="dropbtn">Cars & Services</button>
                            <div className="dropdown-content">
                                <a href="#">Popular Rental Cars</a>
                                <a href="#">Protections & Coverages</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default header