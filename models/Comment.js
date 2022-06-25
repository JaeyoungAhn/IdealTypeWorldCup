const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CommentPostSchema = new Schema({ 
    cardtitle:String, // 이상형 월드컵 제목 부분
    urltitle:String, // 영어 주소
    id:String, // 계정 생성시 주어지는 _id
    datePosted:{type:Date, default:new Date()}, // 게시일
    comment:String, // 댓글 내용
    toppick:String // 이상형 월드컵 우승자로 선택한 것
})

const CommentPost = mongoose.model('CommentPost',CommentPostSchema)
module.exports = CommentPost