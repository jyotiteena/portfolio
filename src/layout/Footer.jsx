import { NavLink } from "react-router-dom";
import { BiLogoTwitter, BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi";

const Footer = () => {
  return (
    <footer id="footer" className="footer light-background">
      <div className="container">
        <div className="copyright text-center">
          <p>© <span>Copyright</span> 
          <strong className="px-1 sitename">Kelly</strong> 
          <span>All Rights Reserved <br /></span></p>
        </div>

        <div className="social-links d-flex justify-content-center">
          <NavLink to="/twitter" aria-label="Twitter"><BiLogoTwitter color="blue" size={24} /></NavLink>
          <NavLink to="/facebook" aria-label="Facebook"><BiLogoFacebook color="blue" size={24} /></NavLink>
          <NavLink to="/instagram" aria-label="Instagram"><BiLogoInstagram color="#E1306C" size={24} /></NavLink>
          <NavLink to="/linkedin" aria-label="LinkedIn"><BiLogoLinkedin color="#0077B5" size={24} /></NavLink>
        </div>

        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/" target="_blank" rel="noopener noreferrer">BootstrapMade</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;