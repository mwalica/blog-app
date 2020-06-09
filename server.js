const express = require("express");
const connectDB = require('./config/db');

const usersRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const articlesRoutes = require('./routes/articles');

const app = express();

//Connect Datebase
connectDB();

//Init Middleware
app.use(express.json({extended: false}));

app.get("/", (req, res) => res.json({ msg: "Welcom to the MyBlog App" }));

//define routes
app.use('/api/users', usersRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/articles', articlesRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
