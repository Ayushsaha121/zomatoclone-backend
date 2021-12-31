const express = require('express');
const db = require('./../db/conn');
const router = express.Router();
try {
    exports.STORE_REGISTRATION = async function (req, res, next) {
            console.log(req.body)

        // const userProfile=new userProfile(req.body)
        // const response= await userProfile.save()
        res.send({
         code:200,
         result:[]
        })
    }
}catch(e){
    console.log(e);
}