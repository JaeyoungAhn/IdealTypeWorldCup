const User = require('../models/User.js')
const CardPost = require('../models/CardPost.js')
const path = require('path')
const fs = require('fs')

module.exports = async (req,res)=> {
    let link = req.params.link
    const card = await CardPost.find({urltitle:link})
    let link2 = "public/assets/img/"+link
    selectPage=""
    fs.readdir(link2, (err, filelist) => {
        return res.render('playcard',{selectPage, card, filelist, loggedIn});
    })
}