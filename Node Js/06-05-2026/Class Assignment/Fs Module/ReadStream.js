const fs = require("fs")

const readable = fs.createReadStream("./data.txt")

readable.on("data", (chunk)=>{
    console.log(chunk.toString());
})
readable.on("error",(error)=>{
    console.log("Error Occured", error.message);
})
readable.on("end",()=>{
    console.log("Data reading is completed");
})