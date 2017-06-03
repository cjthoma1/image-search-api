var express = require('express'),
router = express.Router()



router.use("/imagesearch/:term", (req, res) => {
   
    var db = req.db,
    imageUrls = db.get("imagesearch"),
    imageSearch = req.imageSearch
    
   imageUrls.insert({"term": req.params.term, "dateTime": new Date(Date.now())})
   imageSearch(req.params.term, (results) =>{
       console.log(results)
       res.send("Test")
   });
     //res.send();
    
    
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