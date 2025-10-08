const { spawn } = require('child_process');

function predictCrop(features) {
    return new Promise((resolve, reject) => {
        const python = spawn('python', [
    './python/model.py'
]);

        let result = '';
        let error = '';

        python.stdout.on('data', (data) => {
            result += data.toString();
        });

        python.stderr.on('data', (data) => {
            error += data.toString();
        });

        python.on('close', (code) => {
            if (code !== 0) {
                reject(error || 'Python script failed');
            } else {
                resolve(result.trim());
            }
        });

        // Send JSON input to Python script via stdin
        python.stdin.write(JSON.stringify(features));
        python.stdin.end();
    });
}

module.exports = { predictCrop };