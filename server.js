require('dotenv').config()

var express= require("express"),
app = express(),
path = require('path'),
port = process.env.PORT || '8080',

routes = require("./routes/api"),
mongo = require("mongodb"),
monk = require("monk"),
db = monk(process.env.MONGOLAB_URI),
//db = monk('localhost:27017/images'),

// imageSearch = require('node-google-image-search'),
GoogleImages = require('google-images');



// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    req.imageSearch = new GoogleImages(process.env.CSE_ID, process.env.CSE_API_KEY);

    next();
});

app.use("/api", routes)
app.use("/", (req, res)=>{
    res.send("Type url/api/imagesearch/<searchterm>?offset=<number to offset>")
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})