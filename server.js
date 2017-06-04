require('dotenv').config()

var express= require("express"),
app = express(),
path = require("path"),
port = process.env.PORT || '8080',

routes = require("./routes/api"),
mongo = require("mongodb"),
monk = require("monk"),
//db = monk(process.env.MONGOLAB_URI),
db = monk('localhost:27017/images'),

imageSearch = require('node-google-image-search');

app.use(express.static(path.resolve(__dirname, 'client')));

// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
   
    req.imageSearch = imageSearch;
    next();
});

app.use("/api", routes)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})