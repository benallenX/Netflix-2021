import React,{useRef}from 'react'
import './SignUp.css'
import {auth} from '../fire'

const SignUp = () => {
    const emailRef = useRef(null)
    const password = useRef(null)


    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword()
    }

    const signIn = e => {
        e.preventDefault();
    }


    return (
        <div className='signUp'>
            <form>
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='password' />
                <button type='submit' onClick={signIn}>
                    Sign In
                    </button>
                <h4>
                    <span className='signUp__gray'>New to Netflix ? </span>
                    <span className="signUp__link" OnClick={register}>Sign Up now.</span>
                </h4>
            </form>
        </div>
    )
}

export default SignUp
