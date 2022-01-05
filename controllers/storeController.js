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

}
exports.STORE_LOGIN = async function (req, res) {

    let { email, password } = req.body;
    if (email == undefined || email == "") {
        return res.send({
            code: 500,
            status: false,
            msg: "email  is required"
        })
    } else if (password == undefined || password == "") {
        return res.send({
            code: 500,
            status: false,
            msg: "password is required"
        })
    }
    let data = { email: email, password: password };
    storeProfile.findOne(data, (err, result) => {
        if (!err) {
            return res.send({
                code: 200,
                status: true,
                msg: "Logged In",
                result: result
            })
        } else {
            return res.send({
                code: 500,
                status: false,
                msg: "Invalid Credential",
                result: err
            })
        }
    })
}

exports.STORE_UPDATE_PROFILE = async function (req, res) {

    let { email, mobile_number, name, user_id } = req.body;
    if (store_id == "" || store_id == undefined) {
        return res.send({
            code: 500,
            status: false,
            msg: "uid is required"
        })
    } else if (name == "" || name == undefined) {
        return res.send({
            code: 500,
            status: false,
            msg: "name  is required"
        })
    } else if (mobile_number == "" || mobile_number == undefined) {
        return res.send({
            code: 500,
            status: false,
            msg: "mobile_number  is required"
        })
    } else if (email == undefined || email == "") {
        return res.send({
            code: 500,
            status: false,
            msg: "email  is required"
        })
    } else if (password == undefined || password == "") {
        return res.send({
            code: 500,
            status: false,
            msg: "password is required"
        })
    }
catch(e){
    console.log(e);
}