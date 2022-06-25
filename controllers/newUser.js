module.exports = (req,res) =>{
    if(req.path == "/auth/registerfail") fail = "fail"
    else fail = ""
    selectPage=""
    res.render('register', {selectPage, fail}) // render register.ejs
}