const express = require('express');
const ctrlScrap = require("../../controlers/scrap/scrap")
const router = express.Router()


router.get("/", ctrlScrap.home)
router.post("/python", ctrlScrap.scrap)


module.exports = router