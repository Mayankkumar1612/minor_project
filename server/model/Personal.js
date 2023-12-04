const mongoose = require('mongoose');

const personalSchema = new mongoose.Schema({
    fullName : String,
    dob : Date,
    email : String,
    phone : Number,
    gender : String,
    branch : String,
    year : Number,
    rollNo : Number,
    address : String,
    bloodGroup : String,
    fatherName : String,
    motherName : String,
    graduation : String,
    fatherPhone : Number,
    bankname : String,
    banckbranch : String,
    ifscCode : String,
    accNumber : Number,
    LicenceNumber : Number ,
    passport : String,
    aadharNo : Number,
    panNo : Number,
    addressType : String,
    nationality : String,
    state : String,
    district : String,
    blockNumber : Number,
    wardNumber : Number,
    father : String,
    mother : String,
    grandfather : String,
    spouseName : String,
    fatherLaw : String,
    motherLaw : String,
});

const Personal  =  mongoose.model('Personal', personalSchema);

module.exports = Personal;