function validateFeatures(features) {
    // Example: Check required keys
    const required = ['temperature', 'humidity', 'ph', 'rainfall'];
    for (const key of required) {
        if (!(key in features)) {
            return false;
        }
    }
    return true;
}

module.exports = { validateFeatures };