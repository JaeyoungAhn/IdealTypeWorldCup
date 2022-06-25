module.exports = (req,res)=>{
    if(req.path == "/auth/loginfail") stat = "fail"
    else if(req.path == "/auth/loginrequired") stat = "required"
    else stat = ""
    selectPage = ""
    res.render('login', {selectPage, stat})
}