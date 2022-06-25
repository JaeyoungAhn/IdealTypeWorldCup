const Comment = require('../models/Comment.js')
const path = require('path')

module.exports = (req,res)=> {
    Comment.create({
        cardtitle:req.body.sendcomment[0],
        urltitle:req.body.sendcomment[1],
        id:req.body.sendcomment[2],
        comment:req.body.sendcomment[3],
        toppick:req.body.sendcomment[4]
    }, (error, comm) => {
        res.redirect('/')
    })
}