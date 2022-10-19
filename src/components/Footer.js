import React from 'react';
import logo from '../assets/svg/footer-logo.svg';   
import facebook from '../assets/svg/facebook.svg';
import linkedin from '../assets/svg/linkedin.svg';
import twitter from '../assets/svg/twitter.svg';

const Footer = () => {
  return (
    <footer id="footer">
        <div className="containe">
            <div className="footer_comp d-flex justify-content-around">
                <div className="footer_logo">
                    <img src={logo} alt="" />
                    <p className='pt-3'>Contact Us</p>
                </div>

                <div className="social_links">
                    <ul>
                        <li> <img src={twitter} alt="" /> Twitter</li>
                        <li className='py-3'> <img src={linkedin} alt="" /> LinkedIn</li>
                        <li> <img src={facebook} alt="" /> Facebook</li>
                    </ul>
                    <p className='my-5'>&copy; Company 2022</p>
                </div>

                <div className="quick_links">
                    <ul>
                        <li>Live Demos</li>
                        <li className='py-3'>Check Usage</li>
                        <li>Meet Sponsring Team</li>
                    </ul>
                </div>
            </div>

            <div className="copy text-center mt-2">
                {/* <p>&copy; company 2022</p> */}
            </div>
        </div>
    </footer>
  )
}

export default Footer