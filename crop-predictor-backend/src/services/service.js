const { predictCrop } = require('../models/model');

async function getRecommendedCrop(features) {
    // You can add validation or preprocessing here if needed
    // For now, just call the model
    return await predictCrop(features);
}

module.exports = { getRecommendedCrop };