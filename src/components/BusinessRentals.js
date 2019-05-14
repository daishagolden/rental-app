import React from 'react'

function businessrentals() {
    return (
        <>
        <hr />
        <div className="business1 container">
            <div className="row">
                <div className="col-sm-6">
                    <p>Get more for your small business.</p>
                </div>
            </div>
            <div className="row">
                <div className="membership1 col-sm-12">
                    <p>Already a member?</p>
                </div>
            </div>
            <div className="row">
                <div className="rentals-button col-sm-12">
                   <button><a href="/signin">Log in Now</a></button>
                </div>
            </div>
        

       {/* <!-- business information content --> */}
        
            <div className="row">
                <div className="col-sm-12">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nemo libero in saepe quisquam omnis quo dolorum beatae vel voluptas perferendis, earum officiis aliquam, nam reprehenderit quia sapiente excepturi? Minima!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, quaerat.</p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
       
        
            <div className="row">
                <div className="col-sm-12">
                    <ul>
                        <li>Up to 30% off base rates.</li>
                        <li>$3 reward credit for every qualifying rental day</li>
                        <li>Access to the Budget Business Program member-only website.</li>
                        <li>Complimentary Fastbreak membership to allow you skip the counter at pickup.</li>
                        <li>A dedicated support team.</li>
                    </ul>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12">
                    <p>Enroll now to start saving and earning immediately.</p>
                    <p>View <a href="#">Program Terms and Conditions</a></p>
                </div>
            </div>
        </div>
        <hr />

        {/* <!--  informational input section --> */}
        <h1 className="name1">Name</h1>
        <div className="business2 container">
            <div className="row">
                <div className="col-sm-12">
                    <p>First Name</p>
                    <form>
                        <input type="text" name="inputBox" required="required" />   
                    </form>
                    <p>Last Name</p>
                    <form>
                        <input type="text" name="inputBox" required="required" />   
                    </form>
                    <p>Job Title (optional*)</p>
                    <form>
                        <input type="text" name="inputBox" required="required" />   
                    </form>
                </div>
            </div>
        </div>
        <hr />
        <h1 className="contact1">Contact Information</h1>
        <div className="business3 container">
            <div className="row">
                <div className="col-sm-12">
                    <p>Email</p>
                    <form>
                        <input type="text" name="inputBox" required="required" />   
                    </form>
                    <p>Re-enter Email</p>
                    <form>
                        <input type="text" name="inputBox" required="required" />   
                    </form>
                    <p>Phone</p>
                    <form>
                        <input type="text" name="inputBox" required="required" />   
                    </form>

                </div>
            </div>
        </div>
        <hr />
        <h1 className="preferences1">Communication preferences</h1>
        <div className=" container">
            <div className="row">
                <div className=" yes1 col-sm-6">
                    <input type="radio" id="choice1"
                    name="contact" value="email" defaultChecked />  
                    <p>Yes, I would like to recieve emails, updates, and special offers from Exotic.</p>
                </div>
                <div className="no1 col=sm-6">
                    <input type="radio" id="contactChoice1"
                    name="contact" value="email" defaultChecked />
                    <p>No, I do not want to recieve promotional email offers at this time.</p>
                </div>
            </div>
        </div>
        <hr />
        <h1 className="companyinfo-1">Company Information</h1>
        <div className="business4 container">
            <div className="row">
                <div className="col-sm-12">
                    <p>Business Name</p>
                    <form>
                        <input type="text" name="inputBox"  />   
                    </form>
                </div>
            </div>
        </div>
        <div className="business5 container">
            <div className="row">
                <div className="col-sm-12">
                    <p>Address Line 1</p>
                    <form>
                        <input type="text" name="inputBox" required="required"/>
                    </form>
                </div>
            </div>
        </div>
        <div className="business6 container">
            <div className="row">
                    <div className="col-sm-12">
                    <p>Address Line 2 (Optional)</p>
                    <form>
                        <input type="text" name="inputBox" />
                    </form>
                </div>
            </div>
        </div>
        <div className="business7 container">
            <div className="row">
                <div className="col-sm-12">
                    <p>City</p>
                    <form>
                        <input type="text" name="inputBox" required="required" />
                    </form>
                </div>
            </div>
        </div>
        <div className="business8 container">
            <div className="row">
                <div className="col-sm-12">
                    <p>State</p>
                    <form>
                        <input type="text" name="inputBox" required="required" />
                    </form>
                </div>
            </div>
        </div>
        <div className="business9 container">
            <div className="row">
                <div className="col-sm-12">
                    <p>Zip</p>
                    <form>
                        <input type="text" name="inputBox" required="required" />
                    </form>
                </div>
            </div>
        </div>
        <div className="business10 container">
            <div className="row">
                    <div className="col-sm-12">
                        <p>Country</p>
                    <form>
                        <input type="text" name="inputBox" required="required" />
                    </form>
                </div>
            </div>
        </div>
        <hr />
        <div className="container">
            <div className="button-options row">
                <div className="col-sm-6">
                    <button><a href="">Cancel</a></button>
                </div>
                <div className="col-sm-6">
                    <button><a href="">Submit</a></button>
                </div>
            </div>
        </div>  
        </>
    )
}

export default businessrentals
