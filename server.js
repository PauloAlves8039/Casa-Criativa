/**
 * Arquivo responsável pelas configurações do servidor da aplicação.
 * 
*/

const express = require("express")
const server = express()

const ideas = [
    {
        img: "./assets/images/computador.svg",
        title: "Cursos de Programação",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti odio ab alias!",
        url: "https://rocketseat.com.br/"
    },
    {
        img: "./assets/images/esporte.svg",
        title: "Exercícios",
        category: "Saúde",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti odio ab alias!",
        url: "https://rocketseat.com.br/"
    },
    {
        img: "./assets/images/meditacao.svg",
        title: "Meditação",
        category: "Mentalidade",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti odio ab alias!",
        url: "https://rocketseat.com.br/"
    },
    {
        img: "./assets/images/karaoke.svg",
        title: "Karaokê",
        category: "Diversão em Família",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti odio ab alias!",
        url: "https://rocketseat.com.br/"
    }
]

server.use(express.static("public"))

const nunjucks = require('nunjucks')
nunjucks.configure("views", {
    express: server,
    noCache: true, 
})

server.get("/", function(req, res) {
    
    const reverseIdeas = [...ideas].reverse()

    let lastIdeias = []
    
    for(let idea of reverseIdeas){
        if(lastIdeias.length < 2){
            lastIdeias.push(idea)
        }
    }
    
    return res.render("index.html", { ideas: lastIdeias })
})

server.get("/ideias", function(req, res) {
    const reverseIdeas = [...ideas].reverse()
    return res.render("ideias.html", { ideas: reverseIdeas })
})

server.listen(3000)