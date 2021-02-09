import React from 'react'
import './SignUp.css'

const SignUp = () => {
    return (
        <div className='signUp'>
            <form>
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='password' />
                <button type='submit'>Sign In</button>
                <h4 className='newMember'>New to Netflix?<span>Sign Up now.</span></h4>
            </form>
        </div>
    )
}

export default SignUp
