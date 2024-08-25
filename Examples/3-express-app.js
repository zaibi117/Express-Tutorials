const express = require('express');
const app = express();
const path = require('path');
const port = 5000;

// setup static and middleware
app.use(express.static('./public'))

// app.get('/', (req, res) => {
//     res.status(200).sendFile(path.join(__dirname, './sign-up/index.html'));
//    adding to the static assets
//     SSR
// })

app.all('*', (req, res) => {
    res.status(400).send('<h1>404 Page Not found</h1>');
});

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
})