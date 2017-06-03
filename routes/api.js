var express = require('express');
var router = express.Router();


router.use("/imagesearch/:term", (req, res) => {
   
    var db = req.db,
    imageUrls = db.get("imagesearch");
    
   imageUrls.insert({"term": req.params.term, "dateTime": new Date(Date.now()) })
     res.send(req.params.term + " "+ req.query.offset);
    
    
})

router.get("/latest/imagesearch", (req, res) => {
     var db = req.db,
     imageUrls =db.get("imagesearch")
     imageUrls.find({}, (err,docs) =>{
         if(err) console.error(err)
         res.send(docs)
     })
        
    
    
})

module.exports = router;