module.exports = (req, res) => {
    if(loggedIn) {
        const selectPage = "create"
        return res.render('create', {selectPage})
    }
    res.redirect('/auth/loginrequired')
    
}