
const bookvino = require("../models/winery.model");
const express = require("express");
const router = express.Router();

const multer = require( 'multer' );
const upload = multer( {

    storage: multer.diskStorage( {
        destination: function ( req, file, cb ) {
          console.log(file)
            cb( null, 'public/images' );
        },
        filename: function ( req, file, cb ) {
          console.log(file)
            cb(null, Date.now() + '-' + file.originalname)
           // cb( null, file.originalname )
        }
    } )
} );

router.get("/", async (req, res) => {
  try {
    const winerys = await bookvino.find();

    
    res.status(200).json(winerys);
  } catch (error) {
    res.status(500).json({ message: "There is an error in " + error.message });
  }
});


router.get("/:wineryid", async (req, res) => {
  try {
    const winery = await bookvino.findById(req.params.wineryid);

    
    res.status(200).json(winery);
  } catch (error) {
    res.status(500).json({ message: "There is an error in " + error.message });
  }
});



router.post("/", upload.single('pictures'), async (req, res) => {
  console.log("body", req.body, req.file)
  try {
    
    let newwinery = new bookvino(req.body);
    newwinery.pictures = req.file ? req.file.filename : "le-marognole.png";
    await newwinery.save(); 

    
    res
      .status(201)
      .json({ message: "You've created a new winery!", created: newwinery });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "There is an error" });
  }
});



router.put("/:wineryid", async (req, res) => {
  
 
  if(JSON.stringify(req.body) === "{}" ) {
    return res.status(410).json({message: "No data to edit"});
  }

  try {
    let editWinery = await bookvino.findByIdAndUpdate(req.params.wineryid, req.body, {
      new: true,
    });

    if (editWinery) {
      res.status(200).json({ message: "Winery edited", edited: editWinery });
    } else {
      res
        .status(410)
        .json({ message: "Nothing was edited", edited: editWinery });
    }
  } catch (error) {
    console.log("ERROR", error);
    res.status(500).json({ message: "There is an error" });
  }
});


router.delete("/:wineryid", async (req, res) => {
  try {
    let delWinery = await bookvino.findByIdAndDelete(req.params.wineryid);

    
    if (delWinery) {
      res.status(200).json({ message: "Winery has been deleted", deleted: delWinery });
    } else {
      
      res
        .status(410)
        .json({ message: "Nothing has been deleted", deleted: delWinery });
    }
  } catch (error) {
    console.log("ERROR", error);
    res.status(500).json({ message: "There is an error" });
  }
});

module.exports = router;
