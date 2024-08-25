const http = require('http')
const {readFileSync}=require('fs')

//getting file
const homePage=readFileSync('./sign-up/index.html');
const style=readFileSync('./sign-up/style.css');
const appLogic=readFileSync('./sign-up/app.js');

const server = http.createServer((req, res) => {
    const url = req.url
    console.log(url)
    //homePage
    if (url === "/"|| url==="/home") {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(homePage)
        res.end()
    }
    //about page
    else if (url === "/about") {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>about Page</h1>')
        res.end()
    }
    //categories Page
    else if (url === "/categories") {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>Categories Page</h1>')
        res.end()
    }
    //Styles
    else if (url === "/style.css") {
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(style)
        res.end()
    }
    //Styles
    else if (url === "/app.js") {
        res.writeHead(200, { 'content-type':'text/javascript' })
        res.write(appLogic)
        res.end()
    }
    //Error 404 page
    else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>404 Page Not Found</h1>')
        res.end()
    }
})
server.listen(5000)