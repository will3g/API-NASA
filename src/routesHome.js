const { Router } = require('express');
const request = require('request');
const axios = require('axios');

const token = require('./auth');
const Article = require('./articles');

const routes = new Router();
//chrome://flags/#unsafely-treat-insecure-origin-as-secure
routes.get('/apod', (req, res) => {
	axios.get(`https://api.nasa.gov/planetary/apod?api_key=${token}`)
		.then(json => {
			res.send({
				'title': JSON.stringify(json.data.title),
				'description': JSON.stringify(json.data.explanation),
				'img': JSON.stringify(json.data.url),
				'date': JSON.stringify(json.data.date),
			});
		})
});

routes.get('/comets', (req, res) => {
	request('https://images-api.nasa.gov/search?q=comets&media_type=image', (error, response, body) => {
		return res.send(new Article(JSON.parse(body)));
	});
});

routes.get('/curiosity', (req, res) => {
	request('https://images-api.nasa.gov/search?q=curiosity&media_type=image', (error, response, body) => {
		return res.send(new Article(JSON.parse(body)));
	});
});

routes.get('/all-planets', (req, res) => {
	request('https://images-api.nasa.gov/search?q=all%2019&description=planets%20landing&media_type=image', (error, response, body) => {
		return res.send(new Article(JSON.parse(body)));
	});
});

routes.get('/apollo-50-years', (req, res) => {
	request('https://images-api.nasa.gov/search?q=apollo%2019&description=moon%20landing&media_type=image', (error, response, body) => {
		return res.send(new Article(JSON.parse(body)));
	});
});

routes.get('/nebula', (req, res) => {
	request('https://images-api.nasa.gov/search?q=nebula&media_type=image', (error, response, body) => {
		return res.send(new Article(JSON.parse(body)));
	});
});

routes.get('/black-hole', (req, res) => {
	request('https://images-api.nasa.gov/search?q=black-hole&media_type=image', (error, response, body) => {
		return res.send(new Article(JSON.parse(body)));
	});
});

routes.get('/telescope', (req, res) => {
	request('https://images-api.nasa.gov/search?q=telescope&media_type=image', (error, response, body) => {
		return res.send(new Article(JSON.parse(body)));
	});
});

routes.get('/falcon-heavy', (req, res) => {
	request('https://images-api.nasa.gov/search?q=falcon-heavy&media_type=image', (error, response, body) => {
		return res.send(new Article(JSON.parse(body)));
	});
});

module.exports = routes;