import { NavLink } from "react-router-dom";
import { BiLogoTwitter, BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi";

const Header = () => {
    return (
        <header id="header" className="header light-background sticky-top">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <NavLink to="/" className="navbar-brand">
                        <h1 className="sitename">Portfolio</h1>
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink exact to="/" activeClassName="active" className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" activeClassName="active" className="nav-link">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/resume" activeClassName="active" className="nav-link">Resume</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/portfolio" activeClassName="active" className="nav-link">Portfolio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" activeClassName="active" className="nav-link">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
