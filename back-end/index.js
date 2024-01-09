const express = require('express')
const app = express()

// import local files
const use= require("./routes/use")


const port = 8217

app.get("/",(req,res)=>{
res.send("hola")
})



app.use('/use', use);

///App listening on port
app.listen(process.env.PORT || port, ()=>{
console.log(`Server is running on port: ${process.env.PORT || port}`)
})

