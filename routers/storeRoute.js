const express =require('express');
const storeController=require('../controllers/storeController');
const router=express.Router();

router.post('/Register',storeController.STORE_REGISTRATION);
router.post('/Login',storeController.STORE_LOGIN);
router.post('/updateProfile/:id',storeController.STORE_UPDATE_PROFILE);

module.exports=router;