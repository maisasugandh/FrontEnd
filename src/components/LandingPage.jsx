

import "../styles/LandingPage.css";
import carLogo from "../images/car-logo.jpg"; // Replace with your logo image
import carImage from "../images/car-image.jpg"; // Replace with your car image

export function LandingPage() {
  return (
    <>
      <div className="container">
        {/* Header Section */}
        <div className="header">
          <div className="logo">
            <img src={carLogo} alt="Car Connect Logo" />
          </div>
          <div className="login-signup">
            <button className="login-signup-btn">Login</button>
            <button className="login-signup-btn">Sign Up</button>
          </div>
        </div>

        {/* Main Content Section */}
        <div
          className="content"
          style={{ backgroundImage: `url(${carImage})` }}
        >
          <div className="content-left">
            <h1>
              <span className="car-text">CAR</span> <span className="ct-text">CNT</span>
            </h1>
            <h3>Discover Your Ideal Vehicle</h3>
            <p>Your one-stop destination for buying, selling, and servicing vehicles.</p>
          </div>
          <div className="content-right">
            <ul className="button-list">
              <li><button>Buy</button></li>
              <li><button>Sell</button></li>
              <li><button>Service</button></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
