const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const port = 3000;

// Parse JSON body
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle POST request to '/api/chatgpt'
app.post('/api/chatgpt', (req, res) => {
  // ... (remaining code for handling the ChatGPT API call)

  // Send the chatbot's response
  res.json({ message: botReply });
});

// Serve index.html as the starting page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});