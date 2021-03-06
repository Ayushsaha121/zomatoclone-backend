const express = require('express');
const db = require('./../db/conn');
const router = express.Router();
// const validation=require('../helperFunctions')
const userProfile = require('../models/userProfile');
try {
    exports.USER_REGISTRATION = async function (req, res) {

        let { email, password, confirm_password } = req.body;
        if (email == true) {
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
        } else if (
            confirm_password == undefined || confirm_password == ""
        ) {
            return res.send({
                code: 500,
                status: false,
                msg: "confirm_password is required"
            })
        } else if (password.localeCompare(confirm_password) != 0) {
            return res.send({
                code: 500,
                status: false,
                msg: "password and confirm_paasword is different"
            })
        }
        let data = { email: email, password: password, createdAt: new Date, updatedAt: new Date }
        const response = await userProfile.create(data, (err, result) => {
            if (!err) {
                return res.send({
                    code: 200,
                    status: true,
                    msg: "Account Created",
                    result: {
                        id: result._id
                    }
                })
            } else {
                return res.send({
                    code: 500,
                    status: false,
                    msg: "something went wrong",
                    result: err
                })
            }
        })
    }
    exports.USER_LOGIN = async function (req, res) {

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
        userProfile.findOne(data, (err, result) => {
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
    exports.USER_UPDATE_PROFILE = async function (req, res) {

        let { email, mobile_number, name, user_id } = req.body;
        if (user_id == "" || user_id == undefined) {
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
        let query = { _id:user_id }
        let newData = { email: email, mobileNumber: mobile_number, name: name };
        userProfile.updateOne(query, newData, (err, result) => {
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
} catch (e) {
    console.log(e);
}
