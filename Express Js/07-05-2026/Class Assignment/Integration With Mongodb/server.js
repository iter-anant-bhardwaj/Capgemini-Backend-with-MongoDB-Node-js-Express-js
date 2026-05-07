const express = require("express");
const mongodb = require('mongodb').MongoClient

const path = require("path");
console.log(path);

const users = [];

const app = express()
let db;

let url = "mongodb://localhost:27017/"
let connectDb = async()=>{
    let client = await mongodb.connect(url)
    db = await client.db("Jecrc")
    // const usersCollection = db.collection("users");
    console.log("Jecrc database is connected successfully");
    await db.createCollection("users")
    console.log("Users collection created"); 
}

connectDb()

app.use(express.urlencoded({extended:true}))
app.use(express.json());


app.get("/",(req, res)=>{
    res.send("<h1>Express with MongoDB Integration</h1>")
})


app.get("/register",(req, res)=>{
    res.sendFile(path.join(__dirname, "register.html"))
})

// app.get("/allUsers", async(req, res)=>{
//     const users = await db
//         .collection("users")
//         .find()
//         .toArray();

//     res.status(200).json(users);
// })

// app.get("/usersPage", (req, res) => {

//     res.sendFile(path.join(__dirname, "allUsers.html"));

// });


app.post("/register", async(req, res)=>{
    console.log(req.body);
    await db.collection("users").insertOne(req.body);
    res.status(200).send("<h1>Data received and stored in MongoDb Database")
})

app.put("/register", async(req, res) => {

    const { name, email, tel, city } = req.body;

    await db.collection("users").updateOne(
        { email:String(email) },
        {
            $set: {
                name,
                tel,
                city
            }
        }
    );

    res.status(200).json({
        message:"User put successfully"
    })

});

app.patch("/register", async (req, res) => {

    const { email, ...updatedData } = req.body;

    await db.collection("users").updateOne(
        { email:String(email) },
        {
            $set: updatedData
        }
    );

    res.status(200).json({
        message: "User Partially Updated"
    });

});

app.delete("/register", async (req, res) => {

    const { email } = req.body;

    await db.collection("users").deleteOne({
        email:String(email)
    });

    res.status(200).json({
        message: "User Deleted Successfully"
    });

});

app.get("/allusers", async (req, res) => {

  let users = await db.collection("users").find().toArray();

  let output = "";

  users.forEach((user) => {

    output += `
    
      <div>

        <h2>${user.name}</h2>

        <p>Email: ${user.email}</p>

        <p>Phone: ${user.tel}</p>

        <p>City: ${user.city}</p>

        <hr>

      </div>

    `;

  });

  res.send(output);

});


app.listen(3000, (err) =>{
    if(err) throw err
    console.log("Server running at http://localhost:3000");
    
})