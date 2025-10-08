const { predictCrop } = require('../models/model');

async function recommendCrop(req, res) {
    try {
        const formData = req.body; // expects JSON input
       // console.log("received features : ",formData)
        const features = {
        N: formData.N,
        P: formData.P,
        K: formData.K,
       temperature: formData.temperature,
        humidity: formData.humidity,
        ph: formData.ph,
        rainfall: formData.rainfall
        };


      //  console.log("features :  ",features)
        const prediction = await predictCrop(features);
        res.json({ recommended_crop: prediction });
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
}

module.exports = { recommendCrop };