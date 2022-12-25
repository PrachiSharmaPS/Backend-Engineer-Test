const express = require("express");
const router = express.Router();

const {createCustomer,getCustomer,deleteCustomer} = require("../controller/customerController");
const {getCard,createCard} = require("../controller/cardController");

//---------------customer-------------------
router.post("/createCustomer",createCustomer)
router.get("/getCustomer",getCustomer)
router.delete("/customerID/:customerID",deleteCustomer)

router.post("/createCard",createCard)
router.get("/getCard",getCard)

router.all("/*",function(req,res){
    res.status(404).send({msg:"invalid http request"})
})

module.exports = router;
