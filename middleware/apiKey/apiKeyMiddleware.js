const validApiKey = 'api-key';

function apiKeyMiddleware(req, res, next) {
    const apiKey = req.headers['x-api-key'];
    if (apiKey && apiKey === validApiKey) {
        next();
    } else {
        res.status(403).json({ error: 'Forbidden: Invalid API Key' });
    }
}

module.exports = apiKeyMiddleware;