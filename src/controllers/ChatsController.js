const chatApi = require('../services/chatApi');

module.exports = {
  async index(request, response) {
    const {filter} = request.query;
    console.log(filter);

    const chats = await chatApi.get(`/chats/search?q=${filter}`);
  
    const filteredChats = chats.data;
  
    return response.json(filteredChats);
  },



};
