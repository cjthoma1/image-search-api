require('dotenv').config()

var express= require("express"),
app = express(),
path = require('path'),
port = process.env.PORT || '8080',

routes = require("./routes/index");

app.use("/api", routes)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})