import express from 'express';
const router = express.Router();


import {getProducts} from '../controllers/product.controller.js';
import {createProducts} from '../controllers/product.controller.js';
import {updateProduct} from '../controllers/product.controller.js';
import {deleteProduct} from '../controllers/product.controller.js';
//for call this route use http://localhost:5000/api/products

//mult enw server file eke tyn url ek
router.post('/',createProducts );

router.delete(' /:id',deleteProduct);

router.get('/',getProducts)

router.put('/:id',updateProduct);

export default router;