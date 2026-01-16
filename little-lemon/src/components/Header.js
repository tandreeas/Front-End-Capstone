//import { Link } from "react-router-dom";
import Logo from "../images/Logo.svg";

function Header() {
  return (
    <header className="main-header">
      <div className="logo-container">
        <img src={Logo} alt="Logo"></img>
      </div>

      <div
      // className={`nav-container ${
      //   isNavVisible ? "nav-visible" : "nav-hidden"
      // }`}
      >
        <nav>
          <ul>
            {/* <li>
              <Link aria-label="Go to Homepage" to="/">
                Home
              </Link>
            </li>
            <li>
              <a aria-label="Go to About Section" href="/#About">
                About
              </a>
            </li>
            <li>
              <a aria-label="Go to Menu Section" href="/#Menu">
                Menu
              </a>
            </li>
            <li>
              <Link aria-label="Go to Reservations page" to="/booking">
                Reservations
              </Link>
            </li>
            <li>
              <a aria-label="Go to Order Online page" href="#OrderOnline">
                Order Online
              </a>
            </li>
            <li>
              <a aria-label="Go to Login page" href="#Login">
                Login
              </a>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
