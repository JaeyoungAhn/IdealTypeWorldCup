const newPostController = require('./controllers/newPost')
const goToAbout = require('./controllers/about')
const homeController = require('./controllers/home')
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware')
const newUserController = require('./controllers/newUser')
const StoreUserController = require('./controllers/storeUser')
const storePostController = require('./controllers/storeCard')
const storeNameController = require('./controllers/storeName')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')
const logoutController = require('./controllers/logout')
const playController = require('./controllers/play')
const storeCommentController = require('./controllers/storeComment')
const viewCommentController = require('./controllers/viewComment')

const express = require('express')
const expressSession = require('express-session')
const app = new express()
const ejs = require('ejs')

const mongoose = require('mongoose')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
const fileUpload = require('express-fileupload')

mongoose.connect('mongodb+srv://idealtype:webpro123@cluster0.gmbd90i.mongodb.net/test', {useNewUrlParser:true})

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(fileUpload())

app.use(expressSession({secret:'keyboard cat', resave:false, saveUninitialized:true}))


global.loggedIn = null;
app.use("*", (req, res, next) => { loggedIn = req.session.userId; next() });

app.get('/auth/register', redirectIfAuthenticatedMiddleware, newUserController)
app.get('/auth/registerfail', redirectIfAuthenticatedMiddleware, newUserController)
app.get('/', homeController)

app.get('/auth/login', redirectIfAuthenticatedMiddleware, loginController)
app.get('/auth/loginfail', redirectIfAuthenticatedMiddleware, loginController)
app.get('/auth/loginrequired', redirectIfAuthenticatedMiddleware, loginController)
app.get('/auth/logout', logoutController)

app.post('/users/register', redirectIfAuthenticatedMiddleware, StoreUserController)
app.post('/users/login', redirectIfAuthenticatedMiddleware, loginUserController)

app.get('/posts/new', newPostController)
app.get('/play/:link', playController)
app.get('/comment/:link', viewCommentController)

app.post('/posts/store', storePostController)
app.post('/posts/name', storeNameController)
app.post('/posts/comment', storeCommentController)

app.get('/about', goToAbout)

let port = process.env.PORT;
if (port==null || port== "") {
    port = 4000;
}
app.listen(port, ()=>{
    console.log('App listening...')
    console.log('http://127.0.0.1:'+port)
})