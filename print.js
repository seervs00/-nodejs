const https = require("https");
const axios = require("axios");

const agent = new https.Agent({
  secureOptions: require('crypto').constants.SSL_OP_NO_TLSv1 | require('crypto').constants.SSL_OP_NO_TLSv1_1, // Enforce TLS 1.2+
});

const apiKey = "sk-YOUR_API_KEY";

axios
  .post(
    "https://api.openai.com/v1/chat/completions",
    const axios = require('axios');

    const apiKey = 'sk-<your_api_key>';
    
    axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-4',
      messages: [{ role: 'user', content: 'Hello, OpenAI!' }]
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    }).then(response => {
      console.log(response.data);
    }).catch(error => {
      console.error('Error:', error.response?.data || error.message);
    });
    