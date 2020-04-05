/**
 * Arquivo responsável pelas configurações do servidor da aplicação.
 * 
*/

const express = require("express")
const server = express()

server.use(express.static("public"))

server.get("/", function(req, res) {
    return res.sendFile(__dirname + "/index.html")
})

server.get("/ideias", function(req, res) {
    return res.sendFile(__dirname + "/ideias.html")
})

server.listen(3000)