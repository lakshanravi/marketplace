// me server.js ekm tm wen project wl app.js , index.js kyl em hdnne



//const express = require('express'); mekm tm yt modern widiht liyl tynne
//"type": "module", mek denn packaje.json file ekt import export syntax use krnn
import express from 'express';

//If you are using ES Modules, ensure that db.js has the .js extension in the import.

import { connectDB } from './config/db.js';
import dotenv from "dotenv";
import productRoutes from './routes/product.route.js';
dotenv.config();
const app = express();
app.use(express.json()); //allows us to accept json data in the body of the request
//root ek

//app.listen(port, [callback msg showing server is running])
app.use('/api/products',productRoutes);

//env eken gtte nthnm run wenn oni port ek, methnin gnnw 5000i kyl
const PORT = process.env.PORT || 5000; 

app.listen(PORT,()=>{
    //api klin define kla me function ek
    connectDB();
    console.log('Server started on http://localhost:' + PORT);
});