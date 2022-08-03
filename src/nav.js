// www.talha.com--welcme to hoome page
//  /about -welcome to about page
//  /contact--welcome to contact page
//  

const express = require('express')
const app = express()
const port = process.env.PORT || 7000


app.get('/',(req,res)=>{
    res.send("welcome to home page")
})

app.get('/about',(req,res)=>{
    res.send("welcome to about page")
})

app.get('/contact',(req,res)=>{
    res.send("welcome to Contact page")

})


 

app.listen(port,() => console.log(`runnig on ${port}`))









