const express = require('express')

const app = express()


const users = [
    {
        id:1,
        name: "Anant"
    },
    {
        id:2,
        name: "Vijay"
    }
]


app.use(express.json());


//! Home Page
app.get("/", (req, res) => {
    res.send("<h1>Hi How are you?</h1>")
})

app.get("/users", (req, res) => {
    res.status(200).json(users)
})

// POST
app.post("/users", (req, res) => {
  users.push(req.body);

  res.status(201).json({
    message: "User added",
    users,
  });
});



// PUT using ternary operator + map()
// send id in body
app.put("/users", (req, res) => {
  users = users.map((user) =>
    user.id === req.body.id ? { ...user, ...req.body } : user,
  );

  res.status(200).json({
    message: "User updated",
    users,
  });
});



// PATCH using ternary operator + map()
// send id in body
app.patch("/users", (req, res) => {
  users = users.map((user) =>
    user.id === req.body.id ? { ...user, ...req.body } : user,
  );

  res.status(200).json({
    message: "User patched",
    users,
  });
});



// DELETE using ternary operator + filter()
// send id in body
app.delete("/users", (req, res) => {
  users = users.filter((user) => (user.id === req.body.id ? false : true));

  res.status(200).json({
    message: "User deleted",
    users,
  });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
