const { Router } = require('express');
const productsRouter = require('./productsRoutes');

const routerMain = Router();
routerMain.use('/products', productsRouter);

module.exports = routerMain;