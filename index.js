var express = require('express');
var expressHbs = require('express-handlebars')
var app = express();
app.listen(process.env.PORT || '3001');
app.engine('handlebars', expressHbs({
    layoutsDir: __dirname + '/views/layouts',
    // layout cha mặc định
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.get('/', function (request,
                       response) {
    console.log('ABABABABABABABAB')
    response.render('abc');
})

app.get('/home', function (request, response) {
    response.send('Homemmmm');
})