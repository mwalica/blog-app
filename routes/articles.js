const express = require('express');
const router = express.Router();


//@route  GET /api/articles
//@desc   Get all users articles
//@access Private
router.get('/', (req, res) => {
    res.send('Get all articles from user');

});

//@route  POST /api/articles
//@desc   Add new articles
//@access Private
router.post('/', (req, res) => {
    res.send('Add articles');
});

//@route  PUT /api/articles/:id
//@desc   Add new articles
//@access Private
router.put('/:id', (req, res) => {
    res.send('Update articles');
});

//@route  DELETE /api/articles/:id
//@desc   delete articles
//@access Private
router.put('/:id', (req, res) => {
    res.send('Delete articles');
});



module.exports = router;