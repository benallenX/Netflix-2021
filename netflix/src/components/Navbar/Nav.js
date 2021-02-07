import React,{useState, useEffect} from 'react'
import './Nav.css'

const Nav = () => {
    const [show,handleShow] = useState(false)
    
    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar)
        return () => window.removeEventListener('scroll', transitionNavBar)
},[])

    return (
        <div className={`nav ${show && "nav-black"}`}> 
        <div className="nav__content">
        <img
        className="nav__logo"
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="NetFlix Logo"
      />

      <img
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="netflix account"
        className="nav__avatar"
      />
        </div>
        
        </div>
    )
}

export default Nav
