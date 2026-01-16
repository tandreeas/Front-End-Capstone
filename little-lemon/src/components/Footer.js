import FooterImage from "../images/restauranfood.jpg";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-image-container">
          <div
            className="footer-image-bg bg-image"
            style={{ backgroundImage: `url(${FooterImage})` }}
          ></div>
        </div>
        <div className="footer-links-container">
          <div>
            <h3>Navigation</h3>
            <ul>
              <li>{/* <Link to="/">Home</Link> */}</li>
              <li>
                <a href="#About">About</a>
              </li>
              <li>
                <a href="#Menu">Menu</a>
              </li>
              <li>{/* <Link to="/booking">Reservations</Link> */}</li>
              <li>
                <a href="#OrderOnline">Order Online</a>
              </li>
              <li>
                <a href="#Login">Login</a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="#Address">Address</a>
              </li>
              <li>
                <a href="#PhoneNumber">Phone number</a>
              </li>
              <li>
                <a href="#Email">Email</a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Social Media Links</h3>
            <ul>
              <li>
                <a href="#Address">Address</a>
              </li>
              <li>
                <a href="#PhoneNumber">Phone number</a>
              </li>
              <li>
                <a href="#Email">Email</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
