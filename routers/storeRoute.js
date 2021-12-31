const express =require('express');
const storeController=require('../controllers/storeController');
const router=express.Router();

router.post('/Register',storeController.STORE_REGISTRATION);

module.exports=router;