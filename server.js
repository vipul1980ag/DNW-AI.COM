const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Force HTTPS in production (Railway terminates SSL and sets x-forwarded-proto)
app.use((req, res, next) => {
  if (process.env.NODE_ENV === 'production' && req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect(301, `https://${req.headers.host}${req.url}`);
  }
  next();
});

app.use(express.static(path.join(__dirname)));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`DNW-AI running on port ${PORT}`);
});
