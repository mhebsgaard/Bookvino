
const bookvino = require("../models/winery.model");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const winerys = await bookvino.find();

    
    res.status(200).json(winerys);
  } catch (error) {
    res.status(500).json({ besked: "Der er sket fejl i " + error.message });
  }
});


router.get("/:wineryid", async (req, res) => {
  try {
    const winery = await bookvino.findById(req.params.wineryid);

    
    res.status(200).json(winery);
  } catch (error) {
    res.status(500).json({ besked: "Der er sket fejl i " + error.message });
  }
});



router.post("/", async (req, res) => {
  try {
    
    let newwinery = new bookvino(req.body);
    await newwinery.save(); 

    
    res
      .status(201)
      .json({ besked: "Der er oprettet en ny todo!", oprettet: newwinery });
  } catch (error) {
    console.log(error);
    res.status(400).json({ besked: "Der er sket en fejl" });
  }
});



router.put("/:wineryid", async (req, res) => {
  
 
  if(JSON.stringify(req.body) === "{}" ) {
    return res.status(410).json({besked: "Ingen data til at rette"});
  }

  try {
    let editWinery = await bookvino.findByIdAndUpdate(req.params.wineryid, req.body, {
      new: true,
    });

    if (editWinery) {
      res.status(200).json({ besked: "Todo er rettet", rettet: editWinery });
    } else {
      res
        .status(410)
        .json({ besked: "Der blev ikke rettet noget", rettet: editWinery });
    }
  } catch (error) {
    console.log("FEJL", error);
    res.status(500).json({ besked: "Der er sket en fejl" });
  }
});


router.delete("/:wineryid", async (req, res) => {
  try {
    let delWinery = await bookvino.findByIdAndDelete(req.params.wineryid);

    
    if (delWinery) {
      res.status(200).json({ besked: "Todo er slettet", slettet: delWinery });
    } else {
      
      res
        .status(410)
        .json({ besked: "Der blev ikke slettet noget", slettet: delWinery });
    }
  } catch (error) {
    console.log("FEJL", error);
    res.status(500).json({ besked: "Der er sket en fejl" });
  }
});

module.exports = router;
