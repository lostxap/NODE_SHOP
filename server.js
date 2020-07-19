const express = require('express');
const carti = require('./carti.json');
const app = express();

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {
    res.render('index' , {
        title: 'MAGAZIN ONLINE',
        carti: carti.profiles
    });
});

app.get('/profile', (req, res) => {
    const carte = carti.profiles.find(p => p.id === req.query.id);
    res.render('profile', {
      title: `Despre ${carte.nume}`,
      carte
    });
  });

const server = app.listen(3000, (err) => {
    if (err){
        console.log(err);
    }else{
        console.log(`Server running on ${server.address().port}`);
    }
});