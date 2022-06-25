const CardPost = require('../models/CardPost.js')

module.exports = async(req,res) => {
    const cards = await CardPost.find({})
    const selectPage = ""
    res.render('index', {selectPage, cards});
}