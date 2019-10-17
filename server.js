const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended:false}))

app.use(bodyparser.json())

app.get('/', (req, res) => res.send('Welcome to Data Representation & Querying'))

app.get('/whatever', (req, res) => res.send('whatever!'))

app.get('/hello/:name', (req, res) => res.send('Hello ' + req.params.name))

app.get('/test', (req, res) =>{
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/name', (req, res) =>{
    res.send('Hello ' + req.query.firstname + ' ' + req.query.lastname);
})
app.post('/name', (req, res)=>{
    res.send('Post received from ' + req.body.firstname + ' ' + req.body.lastname);
})

app.get('/api/movies', (req, res) => {
    const myMovies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
    ];
            
      res.json({movies: myMovies});  

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))