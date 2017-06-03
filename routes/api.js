var express = require('express'),
router = express.Router()



router.use("/imagesearch/:term", (req, res) => {
   
    var db = req.db,
    imageUrls = db.get("imagesearch"),
    imageSearch = req.imageSearch
    
    imageSearch.search('Steve Angello')
	.then(images => {
		/*
		[{
			"url": "http://steveangello.com/boss.jpg",
			"type": "image/jpeg",
			"width": 1024,
			"height": 768,
			"size": 102451,
			"thumbnail": {
				"url": "http://steveangello.com/thumbnail.jpg",
				"width": 512,
				"height": 512
			}
		}]
		 */
		 res.send(images)
	});
   
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