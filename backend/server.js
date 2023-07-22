const http = require("http")
const app = require("./app")
require("dotenv").config()

const PORT = process.env.PORT

const server = http.createServer(app)


server.listen(PORT, () => {
    console.log(`listening at port ${PORT}`)
})

