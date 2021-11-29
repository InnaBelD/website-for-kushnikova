const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    surname: String,
    patronymic: String,
    nickname: String,
    e_mail: String,
    phone: String,
    age: Number,
    gender: String,
    password: String,
    is_admin: Boolean
});

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;