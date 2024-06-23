const yup = require('yup');

const postSchema = yup.object().shape({
    name: yup.string().required(),
    age: yup.number()
}).strict().noUnknown();

module.exports = postSchema;
