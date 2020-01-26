const express = require('express');
const routesHome = require('./routesHome');

class App {
    constructor() {
        this.server = express();
        this.routes();
    }
    routes() { this.server.use(routesHome); }
}

module.exports = new App().server;