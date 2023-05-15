import React, { useEffect } from 'react'
import { Link, useLocation, } from 'react-router-dom'
import './Header.css'

const Header = () => {
    const location = useLocation();
    console.log('location.pathname', location.pathname)




    return (
        <header>
            <div className='header-section'>
                <Link to={'/'} >
                    <h3 className='text-white' style={{ textTransform: "uppercase" }}>ONDC - {location.pathname == "/privacy"  ? "Privacy Policy" : "Terms and conditions"} </h3>
                </Link>

                <div className='header-items'>

                    <Link to='/terms' style={{
                        textTransform: "uppercase",
                        fontWeight: `${location.pathname == "/terms" || location.pathname == "/"  ? "bold" : "normal"}`
                    }}>
                        Term and conditions
                    </Link>
                    <Link to='/privacy' style={{
                        textTransform: "uppercase" ,
                        fontWeight: `${location.pathname == "/privacy" ? "bold" : "normal"}`
                    }} >
                        Privacy Policy
                    </Link>


                </div>
            </div>
        </header >
    )
}

export default Header