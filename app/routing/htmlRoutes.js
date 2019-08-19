app.get('/survey', function (req, res) {
    res.send('survey received')
})
  
app.get('/', function (req, res) {
    res.send('home.html');
  })