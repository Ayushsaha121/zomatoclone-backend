const express =require('express');
const userController=require('../controllers/userController');
const router=express.Router();

router.post('/Register',userController.USER_REGISTRATION);
router.post('/Login',userController.USER_LOGIN)
router.post('/updateProfile/:id',userController.USER_UPDATE_PROFILE)

module.exports=router;