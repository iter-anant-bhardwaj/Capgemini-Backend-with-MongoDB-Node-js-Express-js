import React from "react";

const About = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "50px",
        padding: "60px",
        flexWrap: "wrap",
      }}
    >
      {/* <img
        src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
        alt="about"
        style={{
          width: "350px",
          borderRadius: "20px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
        }}
      /> */}

      {/* Content Section */}
      <div style={{ maxWidth: "500px" }}>
        <h3
          style={{
            color: "#ff2d95",
            marginBottom: "10px",
            letterSpacing: "1px",
            
          }}
        >
          ABOUT US
        </h3>

        <h1
          style={{
            fontSize: "45px",
            marginBottom: "20px",
            color: "#222",
          }}
        >
          Best <span style={{ color: "#ff7a18" }}>Shopping Experience</span>
        </h1>

        <p
          style={{
            color: "#555",
            lineHeight: "1.7",
            marginBottom: "15px",
          }}
        >
          We provide modern fashion products with premium quality and
          affordable prices for everyone.
        </p>

        <p
          style={{
            color: "#555",
            lineHeight: "1.7",
            marginBottom: "20px",
          }}
        >
          Our mission is to make online shopping simple, stylish, and enjoyable.
        </p>

        <button
          style={{
            padding: "12px 30px",
            border: "none",
            borderRadius: "30px",
            background: "linear-gradient(90deg,#ff7a18,#ff2d95)",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default About;