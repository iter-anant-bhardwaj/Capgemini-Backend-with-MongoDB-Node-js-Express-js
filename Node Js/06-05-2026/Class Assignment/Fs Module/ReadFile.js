const fs = require("fs")

//? sync
//without encoding
// const data = fs.readFileSync("./data.txt")
// console.log(data);


// const data = fs.readFileSync("./data.txt", "utf8")
// console.log(data);


//* async

fs.readFile("./data.txt", "utf8",
    (err,data)=>{
        if(err) throw err
        console.log(data);
    }
)









