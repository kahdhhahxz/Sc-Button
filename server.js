const express = require("express")
const server = express()

server.all("/", (req, res) => {
})

server.listen(8080, () => {
  console.log("Loading script...")
})

