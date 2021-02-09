import React from 'react'
import './Login.css'
const Login = () => {

    return (
        <div className="loginScreen">
            <div className="loginScreen__background">
                <img className="loginScreen__logo"
                     src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                     alt=""/>
                      <button className="loginScreen__button">
                        Sign In
                    </button>

                <div className="login__gradient" />   
            </div>
            <div className="loginScreen__body">
                <>
                    <h1> Unlimited films, TV programmes and more.</h1>
                    <h2>Watch anywhere. Cancel at any time.</h2>
                </>
            </div>
        </div>
    )
}

export default Login