const axios = require('axios');

const token= process.env.AUTH_TOKEN;

const chatApi = axios.create({
    baseURL: process.env.CHAT_URL,
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
})

module.exports = chatApi;


