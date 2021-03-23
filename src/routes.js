const { Router } = require('express');
const routes = Router();
const AgentController = require('./controllers/AgentController');

routes.get('/', (req, res) => {
	return res.json({ status: true }).send();
});

routes.get('/agents', AgentController.index);

module.exports = routes;