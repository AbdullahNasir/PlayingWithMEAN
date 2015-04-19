/**
 * Created by Abdullah on 4/19/2015.
 */

var mongoose = require('mongoose');

var userModel= mongoose.Schema({
    name:String,
    email:String,
    password:String
});



var user = mongoose.model('users', userModel,'users');

module.exports = user;