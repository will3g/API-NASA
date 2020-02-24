let http = require('http');
let express = require('express');

let app = express();

http.createServer(app).listen('8000', function() {

    // RENDERIZA OS ARQUIVOS ESTÁTICOS EM TELA
    app.use(express.static('../public'))

    // TENTEI CHAMAR O SERVICE WORKER, PORÉM ELE NÃO É CARREGADO POR CONTA DOS CERTIFICADOS QUE ESTÃO INVÁLIDOS!
    app.use(express.static('./register-sw.js'))

    console.log("Rodando na porta 8000 em HTTP");
});