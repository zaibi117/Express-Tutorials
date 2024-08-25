const  express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.status(200).send('Home Page')
})

app.get('/about',(req,res)=>{
    res.status(200).send('About Page')
})
app.all('*',(req,res)=>{
    res.status(404).send('<h1>404 Page Not Found</h1>')
})

app.listen(5000,()=>{
    console.log('App is listening on 5000 port...');
});




//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen