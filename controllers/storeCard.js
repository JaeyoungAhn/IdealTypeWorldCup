const CardPost = require('../models/CardPost.js')
const User = require('../models/User.js')
const path = require('path')
const fs = require('fs')

module.exports = (req,res)=>{
    ind = 1
    let urlappend = req.body.urltitle
    let urltitle = 'public/assets/img/'+urlappend
    let thumbnail = req.files.image;
    let images = req.files.images;
    if(images.length != 16) { // 업로드하는 폴더내 파일이 16개인지 조사
        const selectPage = "createfailnotsixteen"
        return res.render('create', {selectPage})
    }
    for (image of images) { // 16개 파일들이 전부 사진 파일인지 조사
        if(image.mimetype != "image/jpeg" && image.mimetype != "image/jpg" && image.mimetype != "image/png") {
            const selectPage = "createfailimagetype"
            return res.render('create', {selectPage})
        }
    }
    try { fs.mkdirSync(urltitle) }
    catch(e) { // 이미 존재하는 URL인 경우
        const selectPage = "createfailalreadyexisting"
        return res.render('create', {selectPage})   
    }
    thumbnail.mv(path.resolve(__dirname,'..',urltitle,"AAAAA"))

    for (image of images) {
        image.mv(path.resolve(__dirname,'..',urltitle,ind.toString()))
        ind=ind+1
    }
    const selectPage = "create"
    let sendurl = 'assets/img/'+urlappend

    User.findById(loggedIn, (err, theuser)=> {
        let name = theuser.username
        CardPost.create({ ...req.body, username:name})
    })
    return res.render('create2', {selectPage, sendurl, urlappend})
}
