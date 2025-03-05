// me server.js ekm tm wen project wl app.js , index.js kyl em hdnne



//const express = require('express'); mekm tm yt modern widiht liyl tynne
//"type": "module", mek denn packaje.json file ekt import export syntax use krnn
import express from 'express';

//If you are using ES Modules, ensure that db.js has the .js extension in the import.

import { connectDB } from './config/db.js';
import dotenv from "dotenv";
import Product from './models/product.model.js';

dotenv.config();
const app = express();
app.use(express.json()); //allows us to accept json data in the body of the request
//root ek
app.post('/api/products',async(req,res)=>{
    const product = req.body;
    if(!product.name || !product.price||!product.image){
        return res.status(400).json({success:false,message:"please provide all fields"}) ;
    }

    const newProduct = new Product(product);
    try{
        await newProduct.save();
        res.status(201).json({success:true,data:newProduct});
    }catch(error){
        console.error("error in create product",error.message);
        res.status(500).json({success:false,error:error.message});
    }
  
});
app.delete('/api/products/:id',async(req,res)=>{
const {id} = req.params;
try{
    await Product.findByIdAndDelete(id);
    res.json({success:true,message:"product removed"});
}catch(error){
    console.error("error in delete product",error.message);
    res.status(500).json({success:false,error:error.message});

}
});

app.get('/api/products',async(req,res)=>{
    try{
        const products = await Product.find({});
        res.status(200).json({success:true,data:products});
    }
    catch(error){
        console.log("error in fetching products",error.message);
        res.status(500).json({success:false,message:"server error"});
    }
})

app.put('/api/products/:id',async(req,res)=>{
  const {id} = req.params;
    const product = req.body;

    try{
        const updatedProduct = await Product.findByIdAndUpdate
        (id,product,{new:true});
        res.status(200).json({success:true,data:updatedProduct});

    }catch(error){
        res.status(500).json({success:false,message:"server error"});
    }

});
//app.listen(port, [callback msg showing server is running])

app.listen(5000,()=>{
    //api klin define kla me function ek
    connectDB();
    console.log('Server is running on port 5000');
});