const logMiddleware = async (req, res, next) => {

    let reqObj = req.method === 'GET' ? req.query : req.body;

    console.log(req.method, req.path, reqObj);

    next();
};

module.exports = logMiddleware;