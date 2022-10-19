import React from 'react';
import logo from '../assets/svg/logo.svg'

const NavBar = () => {
    return (
        <nav className='fixed-top'>
            <div className="header d-flex justify-content-around align-items-center">
                <div className="nav_links">
                    <ul className='d-flex'>
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#faq">FAQ</a></li>
                    </ul>

                    {/* <div className="actions_mobile">
                        <button className="btn btn-download">Download</button>
                        <button className="btn btn-login">Login</button>
                    </div> */}
                </div>

                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>

                <div className="actions">
                    <button className="btn btn-download">Download</button>
                    <button className="btn btn-login">Login</button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar