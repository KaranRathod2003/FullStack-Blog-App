// const mongoose = require('mongoose');
// mongoose.connect(`mongodb://127.0.0.1:27017/bloguserpractice`);
// const userSchema = mongoose.Schema({
//     username: String,
//     email: String,
//     password: String
// });

// module.exports = mongoose.model('user', userSchema);
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
});

module.exports = mongoose.model('User', userSchema);
