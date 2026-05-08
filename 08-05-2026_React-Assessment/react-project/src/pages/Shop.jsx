import React from "react";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Stylish Shoes",
      price: "$120",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
      id: 2,
      name: "Modern Watch",
      price: "$90",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
    {
      id: 3,
      name: "Fashion Bag",
      price: "$150",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "50px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
          color: "#ff2d95",
        }}
      >
        Our Shop
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {products.map((item) => (
          <div
            key={item.id}
            style={{
              width: "280px",
              background: "white",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              textAlign: "center",
              paddingBottom: "20px",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
              }}
            />

            <h2
              style={{
                margin: "15px 0 10px",
                color: "#222",
              }}
            >
              {item.name}
            </h2>

            <p
              style={{
                color: "#ff7a18",
                fontSize: "18px",
                marginBottom: "15px",
              }}
            >
              {item.price}
            </p>

            <button
              style={{
                padding: "10px 25px",
                border: "none",
                borderRadius: "25px",
                background: "linear-gradient(90deg,#ff7a18,#ff2d95)",
                color: "white",
                cursor: "pointer",
              }}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;