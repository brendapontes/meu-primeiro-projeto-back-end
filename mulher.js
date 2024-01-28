const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(resquest, response) {
 response.json({
    nome: 'Brenda Pontes',
    imagem: 'https://media.licdn.com/dms/image/C4D03AQHFiiEGBaa3Tg/profile-displayphoto-shrink_200_200/0/1643309776518?e=1710979200&v=beta&t=-6OAvaX_WKTEeL0kNLnly1TmarpjJcVu88NOz86Ww9Q',
    minibio: 'Desenvolvedora BackEnd'
 })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)