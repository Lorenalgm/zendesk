const axios = require('axios');

const api = axios.create({
    baseURL: 'https://proesc.zendesk.com/api/v2',
    auth: {
        username: '',
        password: ''
      }
})

module.exports = api;