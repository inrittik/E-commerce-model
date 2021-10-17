import Express from "express";
import productDetails from './productsDetails.js';
const app = Express();

app.get('/', (req, res)=>{
    res.send("server is ready");
})

app.get("/api/products", (req, res)=>{
    res.send(productDetails.products);
});


// const port = process.env.PORT || 5000;
app.listen(5000, ()=>{
    console.log("Serve at http://localhost:5000");
});