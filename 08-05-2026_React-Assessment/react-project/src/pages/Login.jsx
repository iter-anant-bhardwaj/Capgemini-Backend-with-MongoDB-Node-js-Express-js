import React from "react";

const Login = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "350px",
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            marginBottom: "25px",
            color: "#ff2d95",
          }}
        >
          Login
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            outline: "none",
          }}
        />

        <input
          type="password"
          placeholder="Enter Password"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            outline: "none",
          }}
        />

        <button
          style={{
            width: "100%",
            padding: "12px",
            border: "none",
            borderRadius: "10px",
            background: "linear-gradient(90deg,#ff7a18,#ff2d95)",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Login
        </button>

        <p
          style={{
            marginTop: "15px",
            color: "#555",
          }}
        >
          Don't have an account?{" "}
          <span
            style={{
              color: "#ff2d95",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;