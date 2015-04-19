/**
 * Created by Abdullah on 4/19/2015.
 */

var userModel = require('../models/user');

exports.render = function(req,res){
    res.render('index',{name: "Abdullah", title: "Template Uploader"});
};

exports.signup = function(req,res){
   var user = new userModel(req.body);
    user.save(function(err,user){
        if(!err){
            console.log('user saved');
            res.json({success:true});
        }
    });
};

exports.login = function(req,res){
    var userCredentials = req.body;
    userModel.findOne({'email':userCredentials.email,'password':userCredentials.password},'name email',function(error,user){
        if(!error){
            if(user)
                res.json({success:true,user:user});
            else
                res.json({success:false,error:'Auth Failed'});
        }else{
            res.json({success:false,error:error});
        }
    });
};