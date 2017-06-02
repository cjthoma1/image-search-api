require('dotenv').config()

var express= require("express"),
app = express(),
path = require('path'),
port = process.env.PORT || '8080'

app.use(express.static(path.resolve(__dirname, 'client')))

app.get("/", (req, res) => {
    res.send("Hello World!!")
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})