const express = require('express');
const cors = require('cors');
require('dotenv').config();
//const path = require('path');
// // This forces Node to look for the .env file in the exact folder where index.js lives
// require('dotenv').config({ path: path.join(__dirname, '.env') }); 

console.log("Checking for key...");
console.log("Key found:", process.env.GOOGLE_MAPS_API_KEY); // This will print in your terminal
const app = express();
app.use(cors()); // This allows your separate Frontend folder to talk to this folder

app.get('/api/config', (req, res) => {
    res.json({ apiKey: process.env.GOOGLE_MAPS_API_KEY });
});

app.listen(3000, () => console.log("Backend running on http://localhost:3000"));

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Import the new route you just created
const safeRoute = require('./safeRoute');

// Link the frontend folder so the browser can find your CSS/JS
app.use(express.static(path.join(__dirname, '../saferouteai')));

// Use the routes
app.use('/', safeRoute); 

// Your existing code for the "other page" stays here
// app.get('/other-page', (req, res) => { ... });

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
