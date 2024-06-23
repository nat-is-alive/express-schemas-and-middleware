const validateMiddleware = (schema) => {
    return async (req, res, next) => {

        let reqObj = req.method === 'GET' ? req.query : req.body;

        try {
            reqObj = await schema.validate(reqObj, { abortEarly: false });
            next();
        } catch (err) {
            res.status(500).send(err.errors);
        }
    };
};

module.exports = validateMiddleware;