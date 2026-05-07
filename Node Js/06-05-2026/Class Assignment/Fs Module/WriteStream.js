const fs = require("fs")

const writable = fs.createWriteStream("./message.txt")

writable.write("My name is Anant.",
    (err)=>{
        if(err) throw err
        console.log("File is Overridden");
    }
)