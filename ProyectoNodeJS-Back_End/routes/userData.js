import express from "express";
const router = express.Router();
router.get("/a", async(req,res)=>{
    fetch('') 
    .then(response => response.json())
    .then(data => res.send(data))
    .catch(error => console.log('error:', error));
});

module.exports = router;