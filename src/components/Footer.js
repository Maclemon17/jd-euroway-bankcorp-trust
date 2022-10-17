import React from 'react';
import logo from '../assets/svg/footer-logo.svg';   

const Footer = () => {
  return (
    <section id="footer">
        <div className="container">
            <div className="footer_comp d-flex align-items-center justify-content-around">
                <div className="footer_logo">
                    <img src={logo} alt="" />
                    <p>Contact Us</p>
                </div>

                <div className="social_links">
                    <ul>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                        <li>Facebook</li>
                    </ul>

                </div>

                <div className="quick_links text-rtl">
                    <ul>
                        <li>Live Demos</li>
                        <li>Check Usage</li>
                        <li>Meet Sponsring Team</li>
                    </ul>

                </div>
            </div>

            <div className="copy text-center my-3">
                <p>&copy; company 2022</p>
            </div>
        </div>
    </section>
  )
}

export default Footer