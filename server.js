const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

// Parse JSON body
app.use(express.json());

// Handle POST request to '/api/chatgpt'
app.post('/api/chatgpt', (req, res) => {
  const message = req.body.message;

  // Make API call to ChatGPT
  fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_API_KEY', // Replace with your ChatGPT API key
    },
    body: JSON.stringify({
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: message },
      ],
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      const botReply = data.choices[0].message.content;
      res.json({ message: botReply });
    })
    .catch((error) => {
      console.log('Error:', error);
      res.status(500).json({ error: 'An error occurred' });
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});