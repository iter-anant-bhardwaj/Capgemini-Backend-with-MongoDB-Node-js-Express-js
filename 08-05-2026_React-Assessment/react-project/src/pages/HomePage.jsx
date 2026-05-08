// HomePage.jsx
import React from "react";
import "./style.css";

const HomePage = () => {
  return (
    <div className="home-container">

      <div className="left-section">
        <div className="circle">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b"
            alt="shopping"
          />
        </div>
      </div>

      <div className="right-section">
        <h3>SPECIAL OFFER</h3>

        <h1>
          MEGA <br />
          <span>SALE</span>
        </h1>

        <p>
          Welcome to Ecommerce Site
        </p>

        <button>SHOP NOW</button>
      </div>
    </div>
  );
};

export default HomePage;