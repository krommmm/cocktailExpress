const express = require("express");
const router = express.Router();
const cocktailsCtrl = require("../controllers/cocktails");


router.get("/", cocktailsCtrl.getAllCocktails);
router.get("/:id",cocktailsCtrl.getOneCocktails);

module.exports = router;