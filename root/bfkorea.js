const express = require('express');
const app = express();
const port = 3000;
const fortune = require(__dirname+'/lib/fortune.js')
//Default Set-up
app
.set('port', process.env.PORT || port)
.set('view engine', 'pug')
.use(express.static(__dirname + '/public'));

//Router
app
//Home
.get('/', (req, res) => {
    res.render('main', {
        title: 'Beautiful Korea Travel',
        message: 'Welcome to Beautiful Korea Travel!',
        message2: '아름다운 한국 여행사에 오신 것을 환영합니다!'
    })
})
//About
.get('/about', (req, res) => {
    res.render('fortune', {
        title: 'About',
        message: 'About BFKorea Travel',
        message2: fortune.getFortune()
    })
})

//Error Handler
app
//404
.use((req, res, next) => {
    res.status(400);
    res.render('main', {
        title: 'Ooops!! 404',
        message: 'There is no place to go here...:(',
        message2: '갈 수 없는 페이지에요... :('
    })
})
//500
.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500);
    res.render('main', {
        title: 'Ooops!! 500',
        message: 'Something Goes Wrong...:(',
        message2: '잠시 문제가 발생했어요... :('
    })
})


//Server Begin
app.listen(app.get('port'), () => {
    console.log(`Express started on http://localhost:${app.get('port')} ; press Ctrl-C to terminate.`);
})