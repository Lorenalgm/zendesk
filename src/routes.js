const { Router } = require('express');
const routes = Router();
const TicketsController = require('./controllers/TicketsController');
const ChatsController = require('./controllers/ChatsController');

routes.get('/', (req, res) => {
	return res.json({ status: true }).send();
});

routes.get('/teste', (req, res) => {
	return res.json({ status: true }).send();
});

routes.get('/tickets', TicketsController.index);
routes.get('/chats', ChatsController.index);

module.exports = routes;