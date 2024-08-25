const express = require('express');
const app = express();


let people = require('./Routes/people');
let auth=require('./Routes/auth');
// static assests
app.use(express.static('./method-public'))

//parse form data
app.use(express.urlencoded({ extended: false }))
//parse json
app.use(express.json())
//
app.use('/api/people', people)

app.use('/login',auth)

app.listen(5000, () => {
    console.log("Listening on port 5000...")
})