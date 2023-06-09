const fs = require('fs');
const express = require('express')
const homeRouter = express.Router()
const ProductManager = require('../DAO/productManager.js')
const productManager = new ProductManager();

homeRouter.get("/realtimeproducts", async (req, res) => {
    let productos = await productManager.getProducts();
    console.log(productos);
    return res.render("realTimeProducts", { productos })
})

homeRouter.get("/", async (req, res) => {
    let productos = await productManager.getProducts();
    return res.render("home", { productos })
})

homeRouter.post("/", async (req, res) => {
    console.log('ENTRÓ AL POST');
})


module.exports = homeRouter