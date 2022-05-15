const express = require("express")
const app = express()
const PORT = process.env.PORT || 5000
app.get("/home", (req,res)=>{
    res.send("Ajenipa Jamiu")   
})
app.use(express.static("./public"))
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}...`)
})