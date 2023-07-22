const express = require('express');
const routerScrap = require("./routes/scrap/scrap")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/", routerScrap)


module.exports = app