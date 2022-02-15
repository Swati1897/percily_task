
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var empsSchema = new Schema({
    service: String,
    username : String,
    address: String ,
    mobile_no: Number,
    email_id: String ,
});

var EmpS = mongoose.model('Employee', empsSchema);
    
module.exports = EmpS;


