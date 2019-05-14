import React from 'react'

function customercare() {
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="faq-header col-sm-12">
                    <h2>Customer Care</h2>
                    <p>Questions? You've come to the right place!</p>
                </div>
            </div>
        </div>

        <div className="middle-background">
            <div className="information-section container">
                <div className="row">
                {/* <!-- <p>Information on how to contact us. To get our best rate, use our online reservation system. Already have a reservation? View, change or cancel your reservation online. </P>--> */}
                    <div className="wrapper-1 col-sm-4">
                        <h3>Exotic Lost and Found</h3>
                        <p>Think you forgot or lost possestions in your rental car?</p>
                        <a href="">Learn More > </a>
                    </div>
                    <div className="wrapper-2 col-sm-4">
                        <h3>Request Miles and Points</h3>
                        <p>Request Miles and Points for your rental.</p>
                        <a href="">Learn More > </a>
                    </div>
                    <div className="wrapper-3 col-sm-4"> 
                        <h3>Comments and Feedback</h3>
                        <p>Exotic Car Rental USA customer comments and feedback page. Let us know how well we served you.</p>
                        <a href="">Learn More > </a></div>

                </div>
            </div>
            <div className="information-section2 container">
                <div className="row">
                    <div className="wrapper-4 col-sm-4">
                        <h3>Worldwide Telephone</h3>
                        <p>Exotic Car Rental global phone numbers. All of our customer care and support, road side service, and reservation by phone contact numbers worldwide.</p>
                        <a href="">Learn More > </a>
                    </div>
                    <div className="wrapper-5 col-sm-4">
                        <h3>TTY/TDD Reservation</h3>
                        <p>Exotic Car Rental USA access our rental car reservations and services using TTY and TDD (Telecommunication Device for the Deaf).</p>
                        <a href="">Learn More > </a>
                    </div>
                    <div className="wrapper-6 col-sm-4">
                        <h3>FAQs</h3>
                        <p>Find answers to all your Exotic rental car questions in our FAQ. From age restrictions to credit and insurance questions you'll get the answers here.</p>
                        <a href="">Learn More > </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default customercare
