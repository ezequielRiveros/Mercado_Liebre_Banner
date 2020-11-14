const express=require('express')
const app=express()

app.listen(3000,()=> {console.log("Server starter")})

app.get("/",(req,res)=>{
    res.sendFile(__dirname +"/views/banner.html")  
})

app.get("*",(req,res)=>{
    let path=__dirname+"public" + req.url
    path=path.replace("src","")
    console.log("the url is " + path)
    res.sendFile(path)
})