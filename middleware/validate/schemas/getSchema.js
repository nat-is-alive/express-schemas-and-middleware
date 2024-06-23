const yup = require('yup');

const getSchema = yup.object().shape({
    name: yup.string().required()
}).strict().noUnknown();

module.exports = getSchema;