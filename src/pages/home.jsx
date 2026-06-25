import "./home.css";
import me from "../assets/me.png";
import family from "../assets/family.png";
import tej from "../assets/tej.png";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
  return (
    <div className="hero-section">

      {/* Left Side */}
      <div className="hero-left">

        

        <h1>
          Taste the Love in
          <br />
          <span>Every Bite!</span>
        </h1>

        <p>
          Homemade • Hygienic • No Preservatives
          <br />
          Made with Tradition, Delivered with Care
        </p>

        <div className="features">

          <div className="feature-card">
            <span>🏠</span>
            <p>100% Homemade</p>
          </div>

          <div className="feature-card">
            <span>🌿</span>
            <p>Pure Ingredients</p>
          </div>

          <div className="feature-card">
            <span>❤️</span>
            <p>Made with Love</p>
          </div>

        </div>

        <button className="order-btn"  onClick={() => navigate("/menu")}>
          ORDER FOOD →
        </button>

      </div>

      {/* Right Side */}
      <div className="hero-right">
        <img
          src={family}
          alt="family"
          className="main-image"
        />
      </div>

    </div>
  );
}

export default Home;