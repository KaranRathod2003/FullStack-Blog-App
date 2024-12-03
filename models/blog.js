// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/blogpractice');
// const blogSchema = mongoose.Schema({
//     title: String,
//     content: String
// });

// module.exports = mongoose.model('Blog', blogSchema);
const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    title: String,
    content: String,
});

module.exports = mongoose.model('Blog', blogSchema);
