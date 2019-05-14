import React from 'react'

function register() {
    return (
        <div className="container">
            <div className="row">
                <div className="join-us col-sm-12">
                    <h1>Join Team Exotic</h1>
                    <p>Lets get your personal account set up.</p>
                </div>
            </div>

            <hr />
             {/* <!--  informational input section --> */}
            <div className="container">
                <div className="register2 row">
                    {/* <!--Making Different Boxes for user imput, place holder is what user is told to input --> */}
                    <div className="col-sm-6">
                        <div className="register-form2" style={{marginLeft:"150px"}}>
                            {/* <!-- register form --> */}
                            <form className="signup-form2">
                                <h1>Create your Exotic Account</h1>
                                <input type="text" placeholder="Country"/>
                                <input type="password" placeholder="First Name"/>
                                <input type="text" placeholder="Last Name"/>
                                <input type="password" placeholder="Email Address"/>
                                <label className="switch2">
                                    <input type="checkbox" /><p>Recieve email offers?</p>
                                </label> 
                                <input type="text" placeholder="User Name"/>
                                <input type="password" placeholder="Address Line 1"/>
                                <input type="text" placeholder="Address Line 2"/>
                                <input type="password" placeholder="Zip/PostalCode"/>
                                <button><a href="/Register" className="button">REGISTER</a></button>
                            </form>
                            <p className="message2">Already Registered? <a href="/Signin">Sign In</a></p>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="signin-form3">
                            {/* <!-- login form --> */}
                            <form className="login-form3">
                                <h1>Sign in to your Exotic Account</h1>
                                <input type="text" placeholder="Email Address" style={{marginTop: "30px"}}/>
                                <input type="password" placeholder="Password"/>
                                <button><a href="/Home" className="button">LOGIN</a></button>
                                <label className="switch3">
                                    <input type="checkbox" /> <p>Remember Me</p>
                                </label>  
                                    <a href="#" className="fb2 buttons">
                                        <i className="fab fa-facebook-f"></i> Login with Facebook
                                    </a>
                                    <a href="#" className="twitter2 buttons" style={{paddingLeft: "21px" , paddingRight: "21px"}}>
                                        <i className="fab fa-twitter"></i> Login with Twitter
                                    </a>
                                    <a href="#" className="google2 buttons">
                                        <i className="fab fa-google-plus-g"></i> Login with Google+
                                    </a>
                            </form>
                            <p className="message3">Not Registered? <a href="/Register">Register</a></p>
                        </div>
                    </div>
                </div>     
            </div>  
        </div>

    )
}

export default register
