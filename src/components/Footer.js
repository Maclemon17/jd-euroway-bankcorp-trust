import React from 'react';
import logo from '../assets/svg/footer-logo.svg';   
import facebook from '../assets/svg/facebook.svg';
import linkedin from '../assets/svg/linkedin.svg';
import twitter from '../assets/svg/twitter.svg';

const Footer = () => {
  return (
    <footer id="footer" className='footer'>
        <div className="container-sm-fluid">
            <div className="footer_comp d-flex justify-content-evenly align-items-start">
                <div className="footer_logo">
                    <img src={logo} alt="footer logo" />
                    <p className='pt-3'>Contact Us</p>
                </div>

                <div className="social_links">
                    <ul>
                        <li> <img src={twitter} alt="twitter icon" /> Twitter</li>
                        <li className='py-3'> <img src={linkedin} alt="linkedin icon" /> LinkedIn</li>
                        <li> <img src={facebook} alt="facebook icon" /> Facebook</li>
                    </ul>
                    <p className='copy'>&copy; Company 2022</p>
                </div>

                <div className="quick_links">
                    <ul>
                        <li>Live Demos</li>
                        <li className='py-3'>Check Usage</li>
                        <li>Meet Sponsring Team</li>
                    </ul>
                </div>
            </div>

        </div>
            
    </footer>
  )
}

export default Footer