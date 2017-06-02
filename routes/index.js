var express = require('express');
var router = express.Router();

router.use("/imagesearch/:term", (req, res) => {
    res.send(req.params.term + " "+ req.query.offset)
    
})

router.get("/latest/imagesearch", (req, res) => {
    res.send("DB STUFF!!")
})

module.exports = router;