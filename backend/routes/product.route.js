import express from 'express';
const router = express.Router();




router.post('/api/products',async(req,res)=>{
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
router.delete('/api/products/:id',async(req,res)=>{
const {id} = req.params;
try{
  await Product.findByIdAndDelete(id);
  res.json({success:true,message:"product removed"});
}catch(error){
  console.error("error in delete product",error.message);
  res.status(500).json({success:false,error:error.message});

}
});

router.get('/api/products',async(req,res)=>{
  try{
      const products = await Product.find({});
      res.status(200).json({success:true,data:products});
  }
  catch(error){
      console.log("error in fetching products",error.message);
      res.status(500).json({success:false,message:"server error"});
  }
})

router.put('/api/products/:id',async(req,res)=>{
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

export default router;