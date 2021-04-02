var express = require('express');
var app = express();
var expressHBS = require('express-handlebars');



app.engine('handlebars',expressHBS(
    {
        layoutsDir:__dirname+'/views/layouts',
        defaultLayout: 'main'
    }
));
app.set('view engine','handlebars')
app.get('/',function (request,response){
    var data = "ABCABCABCABCABC";
    var arr = [4,5,67,8,9,12,3,4,5];
    response.render('home',{title:data,array:arr});
});
app.post('/',function (request,response) {

});
app.listen(process.env.PORT || '5000')