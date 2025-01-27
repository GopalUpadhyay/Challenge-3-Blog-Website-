const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

let output = [];
let title = [];




// app.get('/:postName', (req, res)=>{
//     console.log(req.params.postName);
// })

app.get('/', (req, res) => {    
    res.render('home', { output: temp , title : title, check : output});
});


let temp = [];
app.post('/input', (req, res) => {

    // Practice START.
    let text = req.body.output;

    if(text.length > 100){
        text = text.substr(0,100) + ('...');
        temp.push(text);
        title.push(req.body.title);
        output.push(req.body.output);
        res.redirect('/');
    }
    // Practice END.
    else{
        temp.push(text);
        title.push(req.body.title);
        output.push(req.body.output);
        res.redirect('/');
    }
})


app.get('/ReadMore', (req, res)=>{
    res.render('ReadMore', {output : output, title : title});
})

app.get('/input', (req, res) => {
    res.render('input');
})

let About = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam est tenetur quas quasi aperiam sit assumenda laboriosam ab, quidem odit dolore inventore praesentium eveniet, quod, pariatur tempore! Voluptas, fugit ea.';
app.get('/about', (req, res) => {
    res.render('about', { About: About });
});

let contact = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam est tenetur quas quasi aperiam sit assumenda laboriosam ab, quidem odit dolore inventore praesentium eveniet, quod, pariatur tempore! Voluptas, fugit ea.';
app.get('/contact', (req, res) => {
    res.render('contact', { contact: contact });
})





app.listen(3000, (req, res) => {
    console.log('Server is Running on Port 3000');
});
