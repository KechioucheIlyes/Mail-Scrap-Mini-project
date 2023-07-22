const lancement = require("../../lancementPython")

exports.home = (req, res, next) => {
    res.json({ msg: "Home" })
}

exports.scrap = async (req, res, next) => {
    const url = req.body.url
    console.log(url)
    const test = await lancement(url)
    res.json({ msg: test })
}