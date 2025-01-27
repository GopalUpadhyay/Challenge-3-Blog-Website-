const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

let shorter = {Home : 'This Is The First Line Of This Blog WebeSite.'};
let fullData = {Home : 'This Is The First Line Of This Blog WebeSite.'};

app.get('/', (req, res) => {
    res.render('home', {output : shorter, check : fullData, title: Object.keys(shorter)});
});


let temp = ['This Is The First Line Of This Blog WebeSite.'];
app.post('/input', (req, res) => {

    // Practice START.
    let text = req.body.output;

    if (text.length > 100) {
        text = text.substr(0, 100) + ('...');
        shorter[req.body.title] = text;
        fullData[req.body.title] = req.body.output;
        res.redirect('/');
    }
    // Practice END.
    else {
        shorter[req.body.title] = text;
        fullData[req.body.title] = req.body.output;
        res.redirect('/');
    }
})

app.get('/ReadMore/:value', (req, res) => {
    res.render('ReadMore', {data : fullData, title: req.params.value});
});

app.get('/input', (req, res) => {
    res.render('input');
});

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
