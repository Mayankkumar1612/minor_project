const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userType: String,
    username: String,
    email: String,
    password: String,
});

userSchema.methods.isValidPassword = async function (password){
    try{
        return  password === this.password;
    }catch(error){
        throw new Error(error);
    }
}

const User = mongoose.model('SignUp', userSchema);

module.exports = User;