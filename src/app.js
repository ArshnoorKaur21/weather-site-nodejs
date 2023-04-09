const express=require('express')
const { template } = require('handlebars')
const path=require('path')
const app=express()
const hbs=require('hbs')
const { partials } = require('handlebars/runtime')
const port=process.env.PORT || 8000
//if 800 pr nhi chla then josna port piche se mila uspe chlega

//public static path
// console.log(path.join(__dirname,"../public"))
const staticpath=path.join(__dirname,"../public")

// const templatepath=path.join(__dirname,"../templates")
//by simply this it will give error failed to look about in templates here i have gone only to templates we have to go to views in templates foldder

const templatepath=path.join(__dirname,"../templates/views")
const partialpath=path.join(__dirname,"../templates/partials")

app.set('view engine','hbs')
// here we are suing view engine handlebars


//now we have to tell by default pth jonsa views hota now it is tmeplates
app.set('views',templatepath)
hbs.registerPartials(partialpath)

app.use(express.static(staticpath))


app.get("",(req,res)=>{
    // res.send('welcome to home page')
    res.render('index')
})
app.get("/about",(req,res)=>{
    // res.send('welcome to about page')
    res.render('about')
})
app.get("/weather",(req,res)=>{
    res.render('weather')
})
app.get("*",(req,res)=>{
    res.render('404error',{
        errmsg:'oops page not found'
    })
})

app.listen(port,()=>{
    console.log('listening to the port')
})