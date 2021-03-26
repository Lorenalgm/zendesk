const api = require('../services/api');

module.exports = {
  async index(request, response) {
    const {filter} = request.query;

    const tickets = await api.get(`/search/count?query=${filter}`);

    const filteredTickets = tickets.data.count;

    return response.json(filteredTickets);
  },



};