import {
    SiYoutube,
    SiTwitch,
    SiInstagram,
    SiFacebook,
} from 'react-icons/si'
import './Footer.css'

const Footer = ()=>{
    return (
        <div className="footer">
            <div className="footer-icons">
                <SiYoutube/>
                <SiFacebook/>
                <SiInstagram/>
                <SiTwitch/>
            </div>
            <ul>
                <li>
                    Audio Description
                </li>
                <li>Help Center</li>
                <li>Gift Cards</li>
                <li>Media Center</li>
                <li>Investor Relations</li>
                <li>Jobs</li>
                <li>Terms and User</li>
                <li>Privacy</li>
                <li>Legal Notices</li>
                <li>Cookie Preferences</li>
                <li>Corporate Information</li>
                <li>Contact Us</li>
            </ul>
            <p className="copyright-text">&#169; 1997-2024 Netflix, Inc.</p>
        </div>
    )
}

export default Footer

