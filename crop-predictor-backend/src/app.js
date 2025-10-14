
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cropRoutes = require('./routes/cropRoutes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: "https://predictcrop.netlify.app",
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());

app.use(bodyParser.json());

// Use routes
app.use('/api', cropRoutes);

app.get('/', (req, res) => {
    res.send('Crop Recommendation API is running');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});