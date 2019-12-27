import express from "express";

import bodyParser from "body-parser";




const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

// parse requests of content-type - application/json
app.use(bodyParser.json())

app.get("/", (req, res) => res.json({
    ok: true
}));


import productRoutes from './src/product/product.routes';

app.use(productRoutes);

app.listen(4321, () => console.log("Port:4321"));

process.on('uncaughtException', function (err) {
    console.log(err);
}); 

export default app;