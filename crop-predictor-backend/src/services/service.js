const { predictCrop } = require('../models/model');

async function getRecommendedCrop(features) {
    
    return await predictCrop(features);
}

module.exports = { getRecommendedCrop };