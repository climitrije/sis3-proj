const express= require("express")
const use = express.Router();

use.get('/',(req,res)=>{
    console.log("The route has been reached")
    res.send("use")
    })
    
module.exports=use