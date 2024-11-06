import { NavLink } from "react-router-dom";
import { BiLogoTwitter, BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi";

const Footer = () => {
  return (
    <footer id="footer" className="footer light-background">
      <div className="container">
        <div className="copyright text-center">
          <p>© <span>Copyright</span> 
          <span>All Rights Reserved <br /></span></p>
        </div>

        <div className="social-links d-flex justify-content-center">
          <NavLink to="/linkedin" aria-label="LinkedIn"><BiLogoLinkedin color="#0077B5" size={24} /></NavLink>
        </div>

        <div className="credits">
          Designed by Jyoti Jingar
        </div>
      </div>
    </footer>
  );
}

export default Footer;
