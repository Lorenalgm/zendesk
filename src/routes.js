const { Router } = require('express');
const routes = Router();
const TicketsController = require('./controllers/TicketsController');

routes.get('/', (req, res) => {
	return res.json({ status: true }).send();
});

routes.get('/tickets', TicketsController.index);

module.exports = routes;