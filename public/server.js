// Server frontend
// Comands:
//      - sudo node server.js (RODA ESSE SCRIPT ABAIXO)
//      - sudo http-server (RODA UMA LIB DO NPM E CRIA UM SERVER EM HTTP)
//      - sudo static-https-server (RODA UMA LIB DO NPM E CRIA UM SERVER EM HTTPS, PORÉM COM CERTIFICADOS INVÁLIDOS)

let https = require('https');
let fs = require('fs');
let express = require('express');

let app = express();

https.createServer({

    key: fs.readFileSync('./ssl/server.key'),  // CHAVE DE SEGUNRANÇA PARA HTTPS COM SENHA
    cert: fs.readFileSync('./ssl/server.crt'), // CERTIFICADO DE SEGURANÇA COM SENHA DO SERVIDOR
    ca: fs.readFileSync('./ssl/ca.crt'),       // CERTIFICADO DE SEGURANÇA
    requestCert: true,
    rejectUnauthorized: false

}, app).listen('8443', function() {

    // RENDERIZA OS ARQUIVOS ESTÁTICOS EM TELA
    app.use(express.static('../public'))

    // TENTEI CHAMAR O SERVICE WORKER, PORÉM ELE NÃO É CARREGADO POR CONTA DOS CERTIFICADOS QUE ESTÃO INVÁLIDOS!
    app.use(express.static('./sw.js'))

    console.log("Rodando na porta 8443 em HTTPS com certificados de segurança");
});