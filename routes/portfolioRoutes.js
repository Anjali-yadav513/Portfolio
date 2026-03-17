
const express = require("express");
const router = express.Router();

const controller = require("../controllers/portfolioController.js");

router.get("/", controller.getForm);
router.post("/portfolio",controller.createPortfolio);
router.get("/portfolio/:username", controller.getPortfolio);

module.exports = router;