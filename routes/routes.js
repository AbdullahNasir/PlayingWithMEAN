/**
 * Created by Abdullah on 4/19/2015.
 */
var express = require('express');
var router = express.Router();
var UserCtrl = require('../controllers/UserCtrl');


router.use(function ReqLogger(req,res,next){
   console.log("Req received at" + Date.now());
   next();
});

router.get('/',function(req,res){
    UserCtrl.render(req,res);
});

router.post('/user/signup', function (req,res) {
    UserCtrl.signup(req,res);
});

router.post('/user/login', function (req,res) {
   UserCtrl.login(req,res);
});

module.exports = router;