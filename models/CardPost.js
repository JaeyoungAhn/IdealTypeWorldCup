const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CardPostSchema = new Schema({ 
    cardtitle:String, // 이상형 월드컵 제목 부분(중복 가능)
    urltitle:String, // get request에 사용될 영어 주소(중복 불가)
    description:String, // 이상형 월드컵 설명 부분
    username:String, // 게시자
    datePosted:{type:Date, default:new Date()}, // 게시일
    success:{type:Boolean, default:false}
})

const CardPost = mongoose.model('CardPost',CardPostSchema)
module.exports = CardPost