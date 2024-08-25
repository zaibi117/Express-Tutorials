const authorize = (req, res, next) => {
    const { username } = req.query;
    console.log(req.query)
    if (username === 'zaibi') {
        req.user = { name: 'John', id: 633 }
    }
    else {
        res.status(401).send('<h1>Unauthorize</h1>')
    }
    console.log('Authorize')
    next();
}
module.exports = authorize;