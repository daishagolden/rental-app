import React from 'react'

function signin() {
    return (
        <>
        <div className="container">
            <div className="signin1 row">
                {/* <!--Making Different Boxes for user imput, place holder is what user is told to input --> */}
                <div className="signin-form1">
                    <form className="login-form1">
                        <h1>Sign in to your Exotic Account</h1>
                        <input type="text" placeholder="User Name"/>
                        <input type="password" placeholder="password"/>
                        <button><a href="/Home" className="button1">LOGIN</a></button>
                        <div className="col-sm-6">
                            <a href="#" className="fb buttons" style={{marginTop:"62px"}}>
                                <i className="fab fa-facebook-f"></i> Login with Facebook
                            </a>
                        </div>
                        <div className="col-sm-6">
                            <a href="#" className="twitter buttons" style={{marginTop:"62px"}}>
                                <i className="fab fa-twitter"></i> Login with Twitter
                            </a>
                        </div>
                        <div className="col-sm-12">
                            <a href="#" className="google buttons">
                                <i className="fab fa-google-plus-g"></i> Login with Google+
                            </a>
                        </div>                                  
                    </form>
                    <p className="message1">Not Registered? <a href="/Register">Register</a></p>
                </div>
            </div>
        </div>
          
        </>
    )
}

export default signin