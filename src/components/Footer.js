import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__items">
                <span>About Disney+ Hotstar</span>
                <span>Terms of Use</span>
                <span>Privacy Policy</span>
                <span>FAQ</span>
                <span>Feedback</span>
                <span>Careers</span>
            </div>
            <p className="footer__policy">
                © 2021 STAR. All Rights Reserved. HBO, Home Box
                Office and all related channel and programming
                logos are service marks of, and all related programming
                visuals and elements are the property of, Home Box Office,
                Inc. All rights reserved.
            </p>
        </div>
    );
}

export default Footer;
