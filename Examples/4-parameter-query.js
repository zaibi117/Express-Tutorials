const express = require('express');
const app = express();
const { products } = require('../data');

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
})
//To handle api

app.get('/api/products', (req, res) => {
    const newProducts = products.map(product => {
        const { id, name, price } = product
        return { id, name, price }
    })
    res.json(newProducts)
})

app.get('/api/products/:productsId', (req, res) => {

    const { productsId } = req.params;

    const singleProduct = products.find(product => product.id === productsId)
    if (!singleProduct) {
        return res.status(404).send("<h1>Product does not exists</h1>")
    }
    res.json(singleProduct);
})

app.get('/api/v1/query', (req, res) => {
    console.log(req.query)
    const { search, limit } = req.query;
    let sortedProduct = [...products]
    if (search) {
        sortedProduct = sortedProduct.filter(product => {
            return product.name.startsWith(search);
        })
    }
    if (limit) {
        sortedProduct = sortedProduct.slice(0, Number(limit))
    }
    if (sortedProduct.length !== 0) {
        res.status(200).json(sortedProduct)
    }
    else
    {
        res.status(404).send("<h1>Product Not found</h1>")
    }
})

app.all('*', (req, res) => {
    res.status(404).send("<h1>404 Page Not Found</h1>")
})

app.listen(5000, () => {
    console.log("Server is listening on port 5000...")
})