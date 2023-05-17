<img width="353" alt="2023-05-17 12_25_46-커스텀_이상형_월드컵_보고서 pdf 외 페이지 1개 - 개인 - Microsoft​ Edge" src="https://github.com/JaeyoungAhn/spring-boot-study/assets/39547923/da478638-0d08-41ae-9c8e-d9fda7802eac">

<img width="382" alt="2023-05-17 12_25_40-커스텀_이상형_월드컵_보고서 pdf 외 페이지 1개 - 개인 - Microsoft​ Edge" src="https://github.com/JaeyoungAhn/spring-boot-study/assets/39547923/9f8eb940-9f8d-4022-8d64-7552763cc69b">

<img width="209" alt="2023-05-17 12_25_05-커스텀_이상형_월드컵_보고서 pdf 외 페이지 1개 - 개인 - Microsoft​ Edge" src="https://github.com/JaeyoungAhn/spring-boot-study/assets/39547923/bcd03a3c-6b92-4470-aed3-2589d17a62f1">

<img width="292" alt="2023-05-17 12_24_51-커스텀_이상형_월드컵_보고서 pdf 외 페이지 1개 - 개인 - Microsoft​ Edge" src="https://github.com/JaeyoungAhn/spring-boot-study/assets/39547923/c4cf214a-7af3-4edc-89a4-6d1395f9a23b">

<img width="459" alt="2023-05-17 12_24_38-커스텀_이상형_월드컵_보고서 pdf 외 페이지 1개 - 개인 - Microsoft​ Edge" src="https://github.com/JaeyoungAhn/spring-boot-study/assets/39547923/ea6624a8-347d-4d0d-885a-04ff45c57acd">

<img width="316" alt="2023-05-17 12_24_19-커스텀_이상형_월드컵_보고서 pdf 외 페이지 1개 - 개인 - Microsoft​ Edge" src="https://github.com/JaeyoungAhn/spring-boot-study/assets/39547923/87010214-6fd4-42bf-bb7a-eeac366c11c1">

# 과제 목표

중간고사(대체) 과제로 구현 하였던 이상형 월드컵을 보완하여 로그인 한 유저가 직접 이상형 월드컵을 만들어 올리면 다른 유저가 이를 플레이 할 수 있고, 플레이를 끝마친 후 댓글을 남길 수 있도록 발전 시키려 합니다.

# 개발 배경

기존에는 HTML, CSS, JavaScript, Jquery, BootStrap을 이용하여 간단한 이상형 월드컵을 즐길 수 있는 웹페이지를 만들었습니다. 당시에는 웹 애플리케이션 서버(WAS, Web Application Server)를 만들 수 있는 Node.js와 Express 웹 프레임워크, 그리고 데이터를 저장할 수 있는 MongoDB 등에 대한 경험이 전무하였지만 강의를 통해 다양한 것들을 배울 수 있었습니다. 배운 지식을 활용하여 대체 과제로 만들었던 이상형 월드컵을 더 발전시켜보면 어떨까 생각되어 개발하게 되었습니다. 기존 이상형 월드컵은 관리자가 미리 가지고 있던 사진들에 한해서만 이상형 월드컵 이용이 가능했습니다. 이상형 월드컵은 여러가지 주제에 대해 진행될 수 있지만 관리자가 이것들을 전부 만들어 올리는 것은 쉽지 않은 작업입니다. 따라서 유저로 하금 직접 이상형 월드컵을 만들 수 있도록 하기 위해 프로그램을 발전시켜 구현하였고 개량하였다는 의미로 ‘커스텀 이상형 월드컵'이라고 이름을 정하였습니다.

## 소스코드 및 배포

GitHub에 소스 코드를 업로드 하였고, 배포는 Heroku를 이용하였습니다. Heroku는 파일을 저장할때 로컬 서버가 파일을 저장하는 곳과 상대 경로가 동일한 위치에 저장하는 것은 아니고 ephemeral한 임시폴더를 운용해서 별도로 저장하고 서비스가 재시작되거나 길지 않은 시간이 흐르면 초기화 됩니다. 따라서 상용 서비스를 위해서는 Amazon S3 또는 Azure Blob Storage 등을 이용하는 것이 권장된다는 것을 배웠습니다.

# 개발 내용

## 사용된 기술 스택

### HTML

이상형 월드컵이 서비스될 웹사이트의 모습을 나타내기 위해 사용 되었습니다. Form의 Submit 버튼을 누르거나 특정 조건을 만족할 때, Get 또는 Post Request를 보내도록 만들 때에도 쓰입니다. HTML 태그들에게 id 속성을 주어서 JavaScript가 이를 이용하거나 name 속성을 주어서 Get 또는 Post Request를 보낼 시 특정 name을 기준으로 처리하는데 사용됩니다.

### JavaScript(Jquery)

이상형 월드컵을 동작시키기 위한 로직을 구현하는데 사용되었습니다. 배열을 관리하거나 getElementById() 등을 이용하여 특정 태그에 접근하여 이벤트를 실행시키거나 값을 가져올 수 있으며, Jquery는 HTML의 DOM이 전부 로딩이 완료되었을때 JavaScript가 실행되도록 할 때 사용되었습니다.

### Bootstrap(CSS)

웹사이트 그리드 시스템을 적용하여 브라우저의 실제 크기에 따라 동적으로 변하는 틀을 만들기 위해, 그리고 박스 컴포넌트를 만들거나 버튼에 색상을 입히기 위해 사용되었습니다.

### Node.js

서버사이드 개발을 위해 사용되었고 유저가 Get 또는 Post request를 보내면 이를 처리하고 처리된 결과를 클라이언트로 전달 하기 위해 사용하였습니다.

### Express

Node.js 환경 내에서 사용되는 웹 애플리케이션 프레임워크로 웹서버를 구축할 때 제공되는 강력한 기능을 이용하여 Reqeust 처리 등의 기능들을 간편하게 사용하기 위해 쓰였습니다.

### EJS(Embedded JavaScript templates)

Node.js가 생성한 HTML을 클라이언트가 이용할 때, 서버 쪽 .js파일에 담긴 변수들을 이용할 필요가 있을 경우 사용됩니다. if문을 이용하여 조건을 둘 수도 있고 for문을 이용하여 html 태그를 반복하는 강력한 기능도 제공합니다.

### MongoDB

유저의 회원 정보, 유저가 만든 이상형 월드컵 정보, 댓글 정보들을 저장하기 위해 사용되었습니다.

---

## MVC 패턴

데이터베이스를 담당하는 Model, 보이는 부분을 담당하는 View, 서버 내부적으로 동작하는 것을 맡는 Controller, 이 세가지를 통칭하여 MVC 패턴이라고 합니다. 루트 폴더를 기준으로 차례대로 views, models, controllers를 폴더를 운용하고 있으며 이 세 폴더 내에서 대부분의 작업들이 이루어집니다. 이 외에도 미들웨어 .js파일이 저장되어있는 middleware 폴더와 음악파일이나 사진파일등이 저장되어있는 public 폴더가 있습니다. views 폴더 내에 .html 확장자 대신 .ejs 확장자의 파일이 들어있고 이는 EJS 템플릿 엔진을 사용할 수 있게 해줍니다.

## DB 연동과 스키마

```jsx
mongoose.connect('mongodb+srv://idealtype:<password>@cluster0.gmbd90i.mongodb.net/test', {useNewUrlParser:true})
```

mongoose 모듈을 이용하여 MongoDB Atlas와 Cloud로 연결을 해주었습니다. models 폴더에 3개의 스키마를 담은 .js 파일이 있습니다. 회원가입을 할 때 담겨질 유저에 대한 정보는 User.js에서 관리하며 스키마는 다음과 같습니다.

```jsx
const UserSchema = new Schema({
    username: {
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})
```

username은 유일하도록 설정하였고 아래와 같이 bcrypt hash를 이용하여 암호화를 진행하였습니다.

```jsx
const bcrypt = require('bcrypt')

UserSchema.pre('save', function(next){
    const user = this
    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash
        next()
    })
})
```

유저가 직접 만드는 커스텀 이상형 월드컵의 대한 정보를 담는 CardPost.js의 스키마는 다음과 같습니다.

```jsx
const CardPostSchema = new Schema({ 
    cardtitle:String, // 이상형 월드컵 제목 부분(중복 가능)
    urltitle:String, // Get Request에 사용될 영어 주소(중복 불가)
    description:String, // 이상형 월드컵 설명 부분
    username:String, // 게시자
    datePosted:{type:Date, default:new Date()}, // 게시일
    success:{type:Boolean, default:false} // 월드컵 만들기 끝마침 여부
})
```

유저가 이상형 월드컵을 마친 후 작성하는 한마디 댓글이 저장되는 Comment.js의 스키마는 다음과 같습니다.

```jsx
const CommentPostSchema = new Schema({ 
    cardtitle:String, // 이상형 월드컵 제목 부분
    urltitle:String, // 영어 주소
    id:String, // 계정 생성시 주어지는 _id
    datePosted:{type:Date, default:new Date()}, // 게시일
    comment:String, // 댓글 내용
    toppick:String // 이상형 월드컵 우승자로 선택한 것
})
```

## 기능 구현 및 구조

### app.js(listening 부분)

서버가 listen을 하게되면 제일 먼저 실행 되는 부분으로 /controllers 폴더에 있는 모듈들인 .js파일들을 require()로 import 시킵니다. 또한 express 모듈을 불러와서 프레임워크를 사용할 수 있게 합니다. express-session을 불러와서 쿠키와 비슷한 방식인 Session ID를 운용합니다. app에 express()를 인스턴스화 시킵니다. EJS 모듈도 불러옵니다. mongoose 모듈을 이용해서 DB와 연동합니다. 파일을 업로드 하기위한 express-fileupload 모듈도 불러옵니다. view engine을 ejs로 설정해주고 미들웨어를 사용하여 public 폴더를 정적 폴더로 설정합니다. 또한 파일을 업로드를 위해 미들웨어 함수로 express-fileupload의 인스턴스를 넘겨줍니다. 기본적으로 로그인 상태 임을 확인하기 위해 loggedIn이라는 변수를 전역 변수로 두고 미들웨어로 모든 request를 받을 때 유저가 현재 로그인 상태라면 유저의 세션에서 넘겨받은 id를 loggedIn에 할당한 후 이용할 수 있도록 합니다.

---

### 페이지 공통 layouts(header.ejs, nav.ejs, footer.ejs, script.ejs)

렌더링 후 유저에게 전달되어질 .ejs 파일들의 코드의 유지보수를 편리하게 하기 위해 여러 .ejs 파일들에 공통적으로 사용되는 코드 부분들을 컴포넌트화 하여 별도의 .ejs로 저장시키고 <%- include() %>를 이용해 불러오는 방식을 사용하였습니다.


header.ejs에서는 <head> 태그에 들어갈 기본적인 내용이 있습니다. 페이지 제목, 폰트에 대한 링크, css에 대한 링크들이 포함됩니다.

nav.ejs는 공통적으로 모든 페이지 최상단에 보여질 navigation에 대한 코드를 담고있습니다.

이상형 월드컵의 로고와 이름을 제일 왼쪽에 배치하였고 이를 누르면 ‘/’로 이동하게됩니다. 다음으로는 이상형 월드컵을 만들 수 있는 ‘월드컵 만들기'와 제작자에 대한 소개를 담은 ‘About’ 페이지를 배치하였습니다.

이 부분에서 EJS가 사용되는데, selectPage라는 변수를 운용하여 조건문으로 이 변수의 값이 “create”, “createfailalreadyexitsting”, “createfailimagetype”일 경우에는 유저가 월드컵 만들기를 선택했을 경우 실행되며 ‘월드컵 만들기' 글씨가 진한 회색으로 바뀌어 선택되었다는 것을 유저가 인식할 수 있도록 해당 부분에 대한 HTML을 작성해줍니다. 마찬가지로 selectPage의 값이 “about”인 경우는 about이라는 글씨를 진하게 바꿔주고, ‘월드컵 만들기', ‘about’ 둘 다 아닌 경우, 즉 변수의 값이 “”로 비어있는 경우에는 두 부분 모두 하얀색 글씨를 보여주어 둘 중 어떤 것도 선택되지 않았음을 알려줍니다.

화면 우측에는 로그인, 회원가입, 로그아웃을 할 수 있는 곳으로 이동할 수 있는 버튼을 배치하였습니다. 역시 EJS를 이용해서 상술한 loggedIn 전역 변수를 조건문으로 조사하여 로그인 상태가 아니라면 로그인과 회원가입 버튼을 보여주고, 로그인 상태라면 로그아웃 버튼만 보여주도록 하였습니다. 로그인 버튼을 누르면 ‘/auth/login’으로, 회원가입 버튼을 누르면 ‘/auth/register’로, 로그아웃 버튼을 누르면 ‘/auth/logout’으로 이동합니다.

footer.ejs는 화면 아래에 공통적으로 나오는 부분으로, twitter의 이상형 월드컵 검색 링크를, 제작자의 GitHub으로 이동할 수 있는 버튼을 배치하였습니다.

script.ejs에서는 공통적으로 bootstrap에 대한 cdn 링크가 담겨져있습니다.

### 홈페이지

### ‘/’, homeController, home.js, index.ejs
    
클라이언트가 서버에 맨 처음으로 요청을 보내는 주소는 ‘/’입니다. ‘/’에 대해 Get Request를 받는경우 homeController의 모듈 ‘/controllers/home.js’를 실행합니다.

home.js에서는 단순하게 index.ejs를 렌더링 시킬 뿐만 아니라 navigation 부분에 클릭이 되었을때 글자 색상이 변해서 강조되는 것을 것을 방지하기 위해 selectPage라는 변수에 비어있는 값을 전달해주고, 유저들이 직접 만든 이상형 월드컵을 보여주기 위해 이상형 월드컵에 대한 정보를 ‘/models/CardPost.js/’에서 find하여 cards 변수에 리턴받고 파라미터로 전달 해줍니다.

index.ejs의 구조는 EJS를 이용해 단순해졌습니다. <%- include -%>를 이용하여 header.ejs, nav.ejs, footer.ejs, script.ejs를 불러옵니다. 위에서 전달받은 selectPage의 변수의 값이 비어있으므로 navigation바에는 어떤 글씨도 강조되지 않습니다. EJS 이용하여 넘겨받은 이상형 월드컵에 대한 데이터들의 개수인 cards.length만큼 역순으로 반복하여 각각 카드 형태로 보여줍니다. 단, 내부에 조건문을 두어, cards[i].success가 true로 정상적으로 이상형 생성을 마친 것들에 대해서만 진행합니다. 이상형 월드컵 제목인 cards[i].cardtitle, 설명 부분인 cards[i].description, 이상형 월드컵을 만든 유저인 cards[i].username, 그리고 이상형 월드컵을 만든 날짜인 cards[i].datePosted.toDateString()이 변수로 들어갑니다. 또한 ‘시작하기'버튼과 ‘댓글보기' 버튼 두개를 배치하여 전자를 누르면 ‘/play/(영어주소)’로, 후자를 누르면 ‘/comment/(영어주소)’로 이동합니다. 여기서 영어주소는 unique하며 영어주소가 다르므로 app.js에서 다르게 인식합니다.

---

### 회원가입

### ’/auth/register’, redirectIfAuthenticatedMiddleware, newUserController,  newUser.js, register.ejs

‘/views/layouts/nav.ejs’의 상단 우측에 회원가입 버튼을 누르면 ‘/auth/register’로 이동하는데, 이 과정에서 redirectIfAuthenticatedMiddleware와 newUserController를 불러옵니다. 

redirectIfAuthenticatedMiddleware는 ‘/middleware/redirectIfAuthenticatedMiddleware.js’에 있는 모듈이며, 세션에 userId 정보가 존재하는 경우, 즉, 로그인 상태인 경우 회원가입 페이지에 갈 수 없고 ‘/’로 redirect하게 됩니다.

newUserController는 ‘/controllers/newUser.js’ 모듈이며, 이 모듈에 requst를 보낸 곳의 path가 ‘/auth/registerfail’인 경우 fail 변수에 fail을 넣어주고 그게 아닌 경우 빈 값을 넣어줍니다. selectPage 역시 빈값을 넣어주고 register.ejs를 렌더링합니다. req.path가 현재 ‘/auth/register’이므로 fail에는 빈 값이 들어갑니다.

화면 상단에 회원가입 글씨와 배경 사진을 넣어주었고, 아이디와 비밀번호를 입력할 수 있는 text와 password 타입의 input을 넣어주었습니다. 

EJS로 넘겨받은 fail 변수를 이용해서 ‘/controllers/newUser.js’ 모듈의 req.path가 ‘/auth/registerfail’이어서 fail이 “fail”인 경우, 중복된 아이디임을 나타내주고 fail이 “”인 경우 아무것도 나타내지 않습니다.

### ‘/users/register’, redirectIfAuthenticatedMiddleware, StoreUserController, storeUser.js, ‘/auth/registerfail’,

회원가입할 아이디와 비밀번호를 기입한 후 가입 버튼을 누르면 Post 방식으로 ‘/users/register’로 request를 보냅니다. redirectIfAuthenticatedMiddleware로 로그인 중에는 접근하지 못하도록 합니다.

이 후, StoreUserController로 storeUser.js 모듈을 실행합니다. 회원가입 정보를 데이터베이스에 저장하기 위하여 ‘/models/User.js’를 불러오고 Post Request에 대한 정보를 담고있는 req.body를 express에서는 native로 파싱을 해주는데, 이를 이용하여 데이터베이스를 생성합니다. username과 password를 저장하게 되며, User.js의 스키마를 보면, 비밀번호의 경우 bcrypt 모듈을 불러와서 해시로 암호화를 진행한 후 저장하게 됩니다. 만약 error인 경우는 이미 username이 존재하여 중복된 경우이므로 ‘/auth/registerfail’로 redirect해줍니다. 이 경우, fail 변수의 값이 “fail”이므로 중복된 아이디임을 나타냅니다. 에러가 없이 정상적으로 진행된 경우에는 ‘/’로 redirect합니다.

---

### 로그인 & 로그아웃 기능

### ‘/auth/login’, redirectIfAuthenticatedMiddleware, loginController, login.js, login.ejs

navigation의 로그인 버튼을 누르면 ‘/auth/login’으로 이동합니다. redirectIfAuthenticatedMiddleware로 로그인 상태인 경우 접근하지 못하도록 합니다. 이후 loginController의 login.js 모듈을 실행합니다. 

req.path가 ‘/auth/loginfail’인 경우 stat에 “fail”을, req.path가 ‘/auth/loginrequired’인 경우 stat에 “required”를 할당하고 그 외에 경우에는 빈 값을 할당시킵니다. selectPage에 빈 값을 주어 글씨의 강조가 없도록 합니다. login.ejs를 렌더링하며 selectPage와 stat 변수를 넘겨줍니다.

상단에 배경화면과 로그인 글씨를 배치하고, 하단에 아이디와 비밀번호를 입력할 수 있도록 input을 배치합니다. 최하단의 버튼을 누르면, form을 submit하는데, Post방식으로 ‘/users/login’에 request를 보냅니다.

만일 stat 변수의 값이 “fail”인 경우, 아이디나 패스워드가 정확하지 않다고 표시하고, stat 변수의 값이 “required”인 경우 어떠한 컨텐츠를 접근하기 위해서는 로그인을 해야하므로 로그인이 필요하다고 표시합니다. 

### ‘/users/login’, redirectIfAuthenticatedMiddleware, loginUserController, loginUser.js

로그인이 정상적으로 되면 세션에 _id를 추가해주기 위해 loginController의 loginUser.js 모듈을 실행합니다. 유저에 대한 정보를 ‘/model/User.js’에서 불러옵니다. findOne() 메소드를 이용하여 username에 해당하는 데이터를 찾게되고, 성공적으로 찾지 못한 경우 ‘/auth/loginfail’로 redirect합니다. 성공적으로 찾은 경우, 해당 데이터에 저장되어 있는 비밀번호와 유저가 로그인을 하기 위해 입력한 비밀번호를 암호화한 것을 비교하여, 비밀번호가 같으면 req.session.userId에 해당 유저의 _id 값을 넣어주고 ‘/’로 redirect해줍니다. 만약 비밀번호가 다르다면 ‘/auth/loginfail’로 redirect해줍니다. ‘/auth/loginfail’로 로그인창으로 되돌아 간 경우 아이디 또는 비밀번호가 정확하지 않다고 표기합니다.

### ‘/auth/logout’, logoutController, logout.js

로그인 하기전에 navigation의 모습은 왼쪽과 같고, 로그인 하고나서는 ‘로그아웃' 버튼만 보이도록 바뀌게 됩니다. 로그아웃 버튼을 클릭하면 ‘/auth/logout’으로 이동합니다. 

‘/auth/logout’을 요청받으면 서버가 logoutController의 logout.js 모듈을 실행하게 됩니다.

req.session 부분을 destroy() 메소드를 이용하여 없애주고 끝마친 후 ‘/’로 redirect해줍니다. 로그아웃이 된 것으로, ‘/views/layouts/nav.ejs’ 내의 loggedIn에 id가 없어지므로 다시 ‘로그인’, ‘회원가입' 버튼이 보이고 ‘로그아웃' 버튼은 보이지 않습니다.

---

### 월드컵 만들기 기능

### ‘/posts/new’, newPostController, newPost.js, create.ejs, ‘/auth/loginrequired’

navigation의 ‘월드컵 만들기'를 누르면 ‘/posts/new’로 이동하게 됩니다. newPostController의 newPost.js 모듈이 실행됩니다. 

loggedIn 상태일 경우에만 나만의 월드컵 만들기를 정상적으로 진행할 수 있고 로그인 되어있지 않은 경우 ‘/auth/loginrequired’로 redirect하여 로그인 창에서 로그인을 할 수 있게 유도하고 로그인이 필요하다는 글씨를 별도로 나타내줍니다. 로그인이 정상적으로 된 경우 selectPage에 “create”를 대입하고, create.ejs를 렌더링합니다.

상단에 ‘월드컵 만들기' 글씨와 배경화면을 띄워주었고 월드컵 이름, 영어 이름, 주제 설명, 썸네일 이미지, 이미지 폴더를 선택할 수 있도록 input 태그들을 추가하였습니다. 전부 required 옵션을 주어 필수로 입력하게끔 하였고, 버튼을 누르면 form의 내용을 Post 방식으로 ‘/posts/store’로 보내도록 하였습니다. selectPage가 “create”이므로 navigation의 ‘월드컵 만들기'의 색상이 진한 회색으로 강조되어 보입니다. selectPage가 “createfailalreadyexisting”, “createfailnotsixteen”, “createfailimagetype” 중 하나라면, 각각 차례대로 이미 존재하는 영어 주소임을, 이미지의 파일의 개수가 16개 여야함을, 이미지의 확장자가 .jpg, .png, .jpeg 중에 하나여야 함을 빨간 글씨로 강조해서 나타냅니다.

### ‘/posts/store’, storePostController, storeCard.js, create2.ejs

‘/posts/store’ request를 처리하며 storePostController의 storeCard.js 모듈을 실행합니다.

storeCard.js 모듈에서는 ‘/models/CardPost.js’를 불러와서 이상형월드컵에 대한 정보를 저장하는 과정이 있고, 실제 서버 ‘/public/assets/img/영어이름’ 폴더에 이상형월드컵에 사용될 사진 16장과 썸네일 사진 1장, 총 17개의 이미지 파일이 저장되는 과정이 진행됩니다.

첫번째 if문에서 만일 이미지가 16장이 아닌 경우, “createfailnotsixteen”을 selectPage에 할당하고 파라미터로 넘기며 create.ejs를 렌더링해서 16장이 아니라는 글씨를 나타내줍니다. 첫번째 for문에서는 16장의 이미지를 반복하면서 확장자가 .jpeg, .jpg, .png 셋 중 하나에 속하는지 확인합니다. 만일 세 확장자 중에 하나라도 속하지 않는 경우 selectPage에 “createfailimagetype”을 할당하고 create.ejs에 selectPage를 넘기며 렌더링해 이미지 확장자가 맞지 않다고 나타내줍니다. try문에서 불러온 fs 모듈을 이용해서 fs.mkdirSync(urltitle)을 실행하는데, 여기서 urltitle은 ‘public/assets/img/(유저가 입력한 영어 단어)’를 말합니다. 해당 디렉토리를 생성하는 메소드인데 에러가 발생하는 경우 이미 존재하는 디렉토리인 경우 이므로 “createfailalreadyexisting”을 selectPage 변수에 할당하고 create.ejs를 렌더링하여 이미 존재하는 영어 이름임을 알려줍니다.

여기까지 문제 없이 통과했다면 썸네일 사진을 받은 thumbnail 변수를 생성한 디렉토리로 이동해줍니다. 이때, 이름은 ‘AAAAA’로 두었지만 같은 폴더에서 다른 사진과 이름순으로 비교했을때 제일 앞으로 나오게 해주었습니다. 다시 16장의 사진들을 반복해서 조사하여 생성한 폴더로 옮겨주고 파일명은 초기 값인 1인 ind 변수를 이용하여 순서대로 1,2,3,4,5…로 주었습니다. selectPage에 “create”를 주고, sendurl 변수에는 생성한 디렉토리를 html에서 img 태그로 접근할때 src로 이용하기 위한 디렉토리 주소를 할당합니다. User.findById()를 이용하여 현재 로그인 되어있는 유저의 id를 이용하여 username을 받아온 후 name 변수에 저장해줍니다. 이후 CardPost.create()로 이상형 월드컵 제목인 cartitle, 영어 주소인 urltitle, 설명 부분인 description, 게시자인 username을 저장합니다.

끝까지 문제가 없이 통과되었으므로 create2.ejs로 selectPage(”create”), sendurl(디렉토리 위치), urlappend(영어 이름) 변수를 넘겨주면서 렌더링합니다.

create2.ejs에서는 Form안에 EJS를 이용해서 16번 반복하면서 img 태그를 만들어주고 src는 ‘/<%= sendurl %>/<%= i %>’ 값을 주어서 생성한 디렉토리에 있는 사진 파일들을 불러오고, 아래에 input 태그를 두어 표기할 이름을 타이핑할 수 있도록 하였습니다. 화면 하단에는 월드컵 만들기 버튼이 있고 이를 누르면 Post 방식으로 Form을 ‘/posts/name’에 전송합니다. 전송할 때 type이 hidden인 input에서 이상형 월드컵의 영어 이름이 들어있는 urlappend 변수도 같이 전송합니다.

### ‘/posts/name’, storeNameController, storeName.js

storeNameController의 storeName.js 모듈을 실행합니다.

imagenames 배열 변수에 req.body.candidate를 할당하여 이전 16개의 input들의 value값들을 받아옵니다. urlappend에는 영어이름인 urltitle을 받아옵니다. 16번 반복하여 ‘public/assets/img/(urlappend변수)/’의 폴더 경로에 i번째 사진 파일명 i를 imagenames[i-1]로 fs 모듈의 fs.rename을 이용하여 바꾸어줍니다. 여기서, imagenames[0]은 썸네일 사진 ‘AAAAA’가 되므로 imagenames[1]이 1번째 사진에 대해 이름을 표기한 value 값이 됩니다. 모든 과정을 정상적으로 마쳤다면 해당 이상형 월드컵의 CardPost 데이터의 success 부분을 findOneAndUpdate()를 이용하여 true로 바꾸어줍니다. 반복이 끝나면 ‘/’로 redirect합니다.

---

### 이상형 월드컵 기능

### ‘/play/:link’, playController, play.js, playcard.ejs

처음 화면의 ‘시작하기' 버튼을 누르면 이상형 월드컵 영어 이름에 맞는 unique한 src가 :link에 대입되어 진행됩니다. playController의 play.js 모듈이 실행됩니다.

CardPost를 find() 메소드를 이용하여 영어 이름 link에 해당하는 CardPost 데이터를 찾아서 card로 리턴 받습니다. link2에는 해당 영어 이름에 해당하는 폴더에 대한 경로를 저장합니다. link2에 해당하는 폴더를 읽어 오기위해 fs 모듈의 fs.readdir를 이용합니다. 정상적으로 읽은 경우 filelist에는 17개의 사진들의 이름이 있을 것이고 selectPage에 빈 값을 주고 playcard.ejs를 selectPage, card, filelist, loggedIn 값을 전달하면서 렌더링합니다. 

playcard.ejs는 이전에 기본적인 이상형 월드컵의 코드와 동일하지만, EJS를 이용하여 일부 수정하였습니다. 

Juqery의 on 메소드를 이용하여 모든 DOM이 불러왔을때 EJS를 사용하여 filelist[1] 부터 filelist[16]까지 총 16개의 사진에 대한 경로를 imagestoload 배열에 push합니다. 이후 loadImages 함수를 호출하고 imagestoload를 파라미터로 전달합니다. 

loadImages 함수에서 16개 이미지에 대한 태그를 생성하고 images 배열로 push합니다.

photoname 변수에는 16개의 이미지에 대한 이름을 할당합니다. order 변수에 1부터 16까지 16개의 숫자를 push합니다. Pseudo 랜덤을 만들기 위하여 order의 숫자를 random() 메소드를 이용해 섞어줍니다. 유저가 보는 화면 왼쪽에는 order[0]번째 최초 이미지를 src에 불러오고 오른쪽에는 order[1]번째 images를 불러옵니다. 이 두 이미지들의 이름을 나타내는 innerText는 각각 order[0]번째 photoname, order[1]번째 photoname이 됩니다. onclick 이벤트와 onload 이벤트를 적절히 활용하여 이미지를 클릭하면 order 배열을 splice 메소드로 제거해가면서 최종 하나의 우승자가 나올때까지 반복하게 됩니다.

order가 제거되어 length가 1이 되어 우승자가 가려졌을 때 loggedIn 상태일때만 댓글을 달 수 있는 id가 comment인 div 태그를 append 해줍니다. 로그인 상태가 아니더라도 이상형 월드컵을 플레이 할 수는 있지만 끝나고나서 댓글을 달 수 있는 박스는 나오지 않습니다. 코멘트 창에 댓글을 입력하고 작성을 누르게 되면 onClick 이벤트인 addReply()가 실행됩니다.

---

### 댓글 기능

### ‘/posts/comment’, storeCommentController, storeComment.js

addReply()에서는 Form을 Post방식으로 ‘/posts/comment’로 보내게 되는데 이때 총 5개의 값을 보냅니다. 이때 보내는 내용은 전부 hidden으로 되어있으며 작성 버튼만 누르면 유저가 따로 입력할 필요없이 보내지게 됩니다. 이상형 월드컵 제목인 cardtitle, 영어 주소인 urltitle, 로그인 중인 유저의 id, 댓글 내용인 reply, 유저가 우승자로 뽑은 toppick이 보내집니다. ‘/posts/comment’는 storeCommentController의 storeComment.js 모듈을 실행합니다. 

storeComment.js에서는 ‘/model/Comment.js’를 불러와서 create 메소드를 통해 Request 받은 Post의 req.body부분을 이용해서 sendcomment[0]부터 sendcomment[4]까지 총 5개의 데이터를 저장하게 됩니다. 저장이 끝나면 ‘/’로 redirect됩니다.

### ‘/comment/:link’, viewCommentController, viewComment.js, viewcomment.ejs

‘/’에서 디스플레이 되는 각 주제의 이상협 월드컵에 대하여 ‘댓글보기' 버튼을 클릭하면 unique한 link에 맞게 ‘/comment/:link’로 이동하게됩니다. viewCommentController의 viewComment.js 모듈이 실행됩니다. 

viewComment.js에서 link 변수에는 unique한 영어 이름을 담고 comments에는 Comment.find()를 이용하여 urltitle이 link인, 즉, 해당 영어 이름에만 해당하는 댓글들만 가져옵니다. onecard에는 영어 이름에 해당하는 이상형월드컵에 대한 정보를 가져옵니다. selectPage에는 빈 값을 주고 username 배열을 하나 만듭니다. username 배열은 특정 월드컵의 댓글들을 담은 comments를 for of 문으로 반복하여 하나의 데이터에 대해서 User.find()를 이용하여 _id:가 comment.id인 데이터를 user 변수로 받아와서 이 유저의 username을 username 배열에 push합니다. 다시 말해, id만 알고 있는 상태였지만 username을 받아온 것입니다. viewcomment.ejs를 selectPage, comments, onecard, link, username 5개의 파라미터를 넘기면서 렌더링합니다.

화면 상단에는 <%= onecard[0].cardtitle %>을 이용하여 어떤 월드컵인지에 대한 정보와 배경화면을 배치하였습니다. 하단에는 EJS의 for문을 이용하여 넘겨받은 comments 배열의 길이만큼 반복하면서 col-6으로 한 줄에 2개씩 댓글을 배치하도록 하였습니다. BootStrap으로 round-pill과 border 굵기 효과 등을 주어서 보기 좋게 만들어 주었습니다. 글자가 orange색인 부분은 i번째 username으로 누가 댓글을 작성했는지 보여주고, blueviolet 색상인 부분은 i번째 comment의 toppick으로 우승자로 선택한 것이 무엇인지 보여줍니다. cornflowerblue 색상 부분은 i번째 comment의 datePosted 부분으로 댓글을 올린 날짜를 알려줍니다. 마지막으로 i번째 comments의 comment를 불러와 어떤 댓글을 달았는지 보여줍니다.
