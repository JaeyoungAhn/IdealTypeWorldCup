const User = require('../models/User.js')
const Comment = require('../models/Comment.js')
const CardPost = require('../models/CardPost.js')
const path = require('path')
const fs = require('fs')

module.exports = async (req,res)=> {
    let link = req.params.link
    let comments = await Comment.find({urltitle:link})
    let onecard = await CardPost.find({urltitle:link})
    selectPage=""
    var username = []
    for(comment of comments){
        let user = await User.find({_id:comment.id})
        username.push(user[0].username)
    }
    return res.render('viewcomment',{selectPage, comments, onecard, link, username});
}