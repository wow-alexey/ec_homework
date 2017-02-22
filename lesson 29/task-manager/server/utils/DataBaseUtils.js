import mongoose from "mongoose";

import '../models/userModel.js';


const User = mongoose.model('User');

export function setUpConnection() {
	mongoose.connect('mongodb://student:password@ds157158.mlab.com:57158/testdbeasycode')
}

//Поиск в БД
export function searchUser(login) {
	return User.findOne({login});
}