import React from 'react';
import logo from '../../assets/logo.png';

import './style.css';

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <footer>
                    <div className="row">
                        <div className="col-md-6">
                            <h4 className="footer-title">Online</h4>
                            <ul className="links row">
                                <li>
                                    <div className="circle" id="gmail"></div>
                                    <a className="col-md-3" href="mailto:jacquelineadean@gmail.com">Email</a>
                                </li>
                                <li>
                                    <div className="circle" id="github"></div>
                                    <a className="col-md-3" href="https://github.com/jacquelineadean" target="_blank">GitHub</a>
                                </li>
                                <li>
                                    <div className="circle" id="linkedin"></div>
                                    <a className="col-md-3" href="https://www.linkedin.com/in/jacquelineadean/" target="_blank">LinkedIn</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <div className="Logo">
                                <header className="Logo-footer">
                                    <img src={logo} className="Logo-logo" alt="logo" />
                                </header>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Footer;