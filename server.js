var express = require('express');

// Create app
var app = express();
const PORT = process.env.PORT || 3000

app.use(function(req, res, next){
    console.log(req.heaers['x-forwarded-proto']);
    if((req.headers['x-forwarded-proto']=== 'http') || (req.headers['host'] =='localhost:3000')){
        next();
    }else{
        res.redirect('http://' + req.hostname + req.url);
    }
})

app.use(express.static('public'))

app.listen(PORT, function(){
    console.log("Express server running on port " + PORT );
})