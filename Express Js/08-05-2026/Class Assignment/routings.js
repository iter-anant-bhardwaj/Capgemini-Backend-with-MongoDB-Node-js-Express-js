const express = require("express");

const router = express.Router();

// GET
router.get("/users/:id", (req, res) => {
  res.send(`GET user ${req.params.id}`);
});

// POST
router.post("/users/:id", (req, res) => {
  res.send(`POST user ${req.params.id}`);
});

// PUT
router.put("/users/:id", (req, res) => {
  res.send(`PUT user ${req.params.id}`);
});

// PATCH
router.patch("/users/:id", (req, res) => {
  res.send(`PATCH user ${req.params.id}`);
});

// DELETE
router.delete("/users/:id", (req, res) => {
  res.send(`DELETE user ${req.params.id}`);
});

// Error handling Middleware
// router.use((req, res)=>{
//   if(req.method !== "GET" || req.method !== "PUT" || req.method !== "POST" || req.method === "DELETE" || req.method !== "PATCH"){
//     return res.status(405).send("Method not allowed");
//   }
//   res.status(404).send("Page not found");
// })



// Handle unsupported methods
router.all("/users/:id", (req, res) => {
  res.status(405).send("Method Not Allowed");
});

router.use((req, res) => {
  res.status(404).send("Page Not Found");
});



module.exports = router;
