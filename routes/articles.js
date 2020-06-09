const express = require("express");
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Article = require("../models/Article");

const router = express.Router();

//@route  GET /api/articles/all
//@desc   Get all user articles
//@access Public
router.get("/all", async (req, res) => {
  try {
    const articles = await Article.find().sort({
      date: -1,
    });
    res.json(articles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route  GET /api/articles
//@desc   Get all user articles
//@access Private
router.get("/", auth, async (req, res) => {
  try {
    const articles = await Article.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(articles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route  POST /api/articles
//@desc   Add new articles
//@access Private
router.post(
  "/",
  [auth, [check("title", "Title is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, content, status } = req.body;
    try {
      const newArticle = new Article({
        title,
        content,
        image:
          "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        status,
        user: req.user.id,
      });

      const article = await newArticle.save();

      res.json(article);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//@route  PUT /api/articles/:id
//@desc   Add new articles
//@access Private
router.put("/:id", auth, async (req, res) => {
  const { title, content, status } = req.body;

  //build article object
  const articleFields = {};
  if (title) articleFields.title = title;
  if (content) articleFields.content = content;
  if (status) articleFields.status = status;

  try {
    let article = await Article.findById(req.params.id);

    if (!article) return res.status(404).json({ msg: "Article not found" });

    //Make sure user oens contact
    if (article.user.toString() !== req.user.id) {
      return res.status(401).json("Not authorized");
    }

    article = await Article.findByIdAndUpdate(
      req.params.id,
      { $set: articleFields },
      { new: true }
    );

    res.json(article);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route  DELETE /api/articles/:id
//@desc   delete articles
//@access Private
router.delete("/:id", auth, async (req, res) => {
    try {
        let article = await Article.findById(req.params.id);
    
        if (!article) return res.status(404).json({ msg: "Article not found" });
    
        //Make sure user owns contact
        if (article.user.toString() !== req.user.id) {
          return res.status(401).json("Not authorized");
        }
    
      await Article.findByIdAndRemove(req.params.id);
    
        res.json({msg: "Article removed"});
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
      }
});

module.exports = router;
