module.exports = (req,res) =>{
    selectPage = "about"
    res.render('about', {selectPage})
}