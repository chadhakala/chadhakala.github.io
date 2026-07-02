const express = require('express');

const app = express();
const port = 3000;




//home page roye
app.get("/", (req, res) => {
  res.send("Hello Slash World!");
});


//hello test route
app.get('/hello', (req, res) => {
  res.send('Open Sores backend is alive');
});

app.get('/login', (req, res) => {
  res.send('Login page coming soon');
});

app.listen(port, () => {
  console.log('Server running on http://localhost:3000');
});
