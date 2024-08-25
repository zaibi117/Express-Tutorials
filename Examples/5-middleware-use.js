const express = require('express');
const app = express();
const logger=require('./logger');
const authorize = require('./authorize')

//req => middleware => res

//1. use vs route
//2. options -- our own /    express    / third party
// app.use([authorize,logger])
app.use(express.static('.publics'))
app.get('/',(req, res) => {
    res.status(200).send("<h1>This is my home page</h1>");
})

app.get('/about', (req, res) => {
    res.send("<h1>about page</h1>");
})

app.get('/api/products',(req,res)=>{
    res.send("<h1>products page</h1>");
})

app.get('/api/items',(req,res)=>{
    res.send("<h1>items page</h1>");
})
app.listen(5000, () => {
    console.log("Server is listening on port 5000...");
})