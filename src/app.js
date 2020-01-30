const express = require('express');
const routesHome = require('./routesHome');

class App {
    constructor() {
        this.server = express();
        this.corsing();
        this.routes();
    }
    routes() { this.server.use(routesHome); }

    corsing() {
        this.server.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
    }
}

module.exports = new App().server;