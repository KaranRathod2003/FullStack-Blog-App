const express = require('express');
const app = express();
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const connectDB = require('./models/db'); // Database connection
const blogModel = require('./models/blog');
const userModel = require('./models/user');

// Middleware
app.use(cookieParser());
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


//authentication
const authenticateToken = (req, res, next) => {
    const token = req.cookies.token; // Get token from cookies

    if (!token) {
        return res.status(401).send('Access Denied: No Token Provided');
    }

    try {
        const verified = jwt.verify(token, 'secret_key'); // Verify token
        req.user = verified; // Attach user data to request
        next();
    } catch (err) {
        res.status(403).send('Invalid Token');
    }
};








// Routes
app.get('/', (req, res)=>{
    res.render('index');
})

//Authentication
app.get('/register',  (req, res)=>{
    res.render('register');
})

app.post('/register', async (req, res)=>{
    let {username, email, password} = req.body;
    let hashedPassword = await bcrypt.hash(password, 10);
    await userModel.create ({username, email, password:hashedPassword});
    res.redirect('/login');
})

app.get('/login', (req, res)=>{
    res.render('login');
})

app.post('/login', async (req, res)=>{
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.send('Invalid username or password'); // Basic error handling
    }

    const token = jwt.sign({ id: user._id }, 'secret_key', { expiresIn: '1h' });
    // Set token as cookie
    res.cookie('token', token, { httpOnly: true, secure: false }); // HTTPS ke liye `secure: true`
    res.redirect('/read'); // Redirect to your protected route
})

app.post('/create',authenticateToken, async (req, res)=>{
    let {title, content} = req.body;
    let newBlog = await blogModel.create({
        title,
        content
    });
    res.redirect('/read');

})

app.get('/read',authenticateToken, async (req, res)=>{
    let blogs = await blogModel.find();
    res.render('read', {blogs});
})

app.get('/update/:id',authenticateToken, async (req, res)=>{
    let id = req.params.id;
    let blog = await blogModel.findById(id);
    res.render('update', {blog});
})

app.post('/update/:id',authenticateToken, async (req, res)=>{
    let {title, content} = req.body;
    let updateduser = await blogModel.findOneAndUpdate({_id: req.params.id}, {
        title,
        content
    },{new: true});
    res.redirect('/read');
})

app.get('/delete/:id',authenticateToken,  async (req, res)=>{
    let id = req.params.id;
    await blogModel.findByIdAndDelete(id);
    res.redirect('/read');
})



// REST API
app.get('/api/posts',authenticateToken, async (req, res) => {
    const blogs = await blogModel.find();
    res.json(blogs);
});

app.post('/api/posts',authenticateToken, async (req, res) => {
    const { title, content } = req.body;
    const newBlog = await blogModel.create({ title, content });
    res.status(201).json(newBlog);
});

app.get('/api/posts/:id',authenticateToken, async (req, res) => {
    try {
        const blog = await blogModel.findById(req.params.id);
        if (blog) res.json(blog);
        else res.status(404).json({ error: "Blog not found" });
    } catch (err) {
        res.status(400).json({ error: "Invalid blog ID" });
    }
});

app.get('/logout', (req, res) => {
    res.clearCookie('token'); // Clear JWT token
    res.redirect('/login'); // Redirect to login
});






connectDB();

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})