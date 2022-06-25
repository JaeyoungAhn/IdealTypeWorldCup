const CardPost = require('../models/CardPost.js')
const path = require('path')
const fs = require('fs')


module.exports = (req,res)=>{
    let imagenames = req.body.candidate
    let urlappend = req.body.urltitle
    for (var i=1; i<=16; i++) {
        let adr = 'public/assets/img/'+urlappend+"/"
        let adr1 = adr+i
        let adr2 = adr+imagenames[i-1]
        fs.rename(adr1, adr2, function (err) {
            if (err) throw err;
          }); 
    }
    CardPost.findOneAndUpdate({urltitle:urlappend}, {success:"true"}, (err,suc)=>{})
    res.redirect('/')
}
