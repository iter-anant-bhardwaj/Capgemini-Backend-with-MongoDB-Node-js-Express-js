const fs = require("fs")

fs.writeFileSync("./message.txt", "Hi how are you?")
const data = fs.readFileSync("./message.txt", "utf8")
console.log(data);



//*async
fs.writeFile("./message.txt", "I am learning Nodejs",
    (err)=>{
        if(err) throw err
    }
)
fs.readFile("./message.txt", "utf8",
    (err,data)=>{
        if(err) throw err
        console.log(data);
    }
)


//?Append
fs.appendFile("./message.txt", "Hi how are you?",
    (err)=>{
        if(err) throw err
    }
)
fs.readFile("./message.txt", "utf8",
    (err,data)=>{
        if(err) throw err
        console.log(data);
    }
)