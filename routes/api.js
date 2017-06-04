var express = require('express'),
router = express.Router();



router.use("/imagesearch/:term", (req, res) => {
   
    var db = req.db,
    imageUrls = db.get("imagesearch"),
    imageSearch = req.imageSearch,
     page = req.query.page  ? (req.query.page * 10)-10 : 1;

   imageSearch(req.params.term, (results) => {
       var parsedResults = [];
       
       results.map((obj) => {
           var newObj = {"url": obj.link, "snippet": obj.snippet, "thumbnail": obj.image.thumbnailLink, "context": obj.image.contextLink}
           parsedResults.push(newObj);
       })
       res.send(parsedResults);
       
   }, page, req.query.offset);
   
   imageUrls.insert({"term": req.params.term, "dateTime": new Date(Date.now())})
  
     
    
    
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