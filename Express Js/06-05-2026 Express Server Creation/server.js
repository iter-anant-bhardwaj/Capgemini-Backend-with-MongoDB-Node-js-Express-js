const express = require('express')

const app = express()

app.get("/",(req, res)=>{
    res.send("Message Received")
})
app.get("/html",(req, res)=>{
    res.send("<h1>Hi Guys</h1>")
})

app.get("/json",(req, res)=>{
    res.json({
        "message":"Backend Json Response"
    })
})

app.get("/array",(req, res)=>{
    res.send([10,20,30])
})

app.listen(3000,(err)=>{
    console.log("Server is running at http://localhost:3000");
})
