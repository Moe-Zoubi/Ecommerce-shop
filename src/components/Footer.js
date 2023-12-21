import furnitureLogo from "../images/furniture-logo.jpg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Footer() {


    return (
      <div className="footer">
        <div className="footer-container">
            <div className="newsletter">
                <h2>Newsletter</h2>
                <input type="email" placeholder="your@email.com" />
                <button>Subscribe</button>
            </div>
            <div className="contact-container">
                <ul className="footer-links">
                    <li>About</li>
                    <li>Store Locator</li>
                    <li>FAQs</li>
                    <li>News</li>
                    <li>Careers</li>
                    <li>Contact Us</li>
                </ul>
                <p>Built with love.</p>
            </div>
        </div>
      </div>
    );
  }
  
  export default Footer;
  