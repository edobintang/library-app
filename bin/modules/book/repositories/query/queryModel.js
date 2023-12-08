const joi = require('joi');

const getAllBySubject = joi.string().required(); // need to validate that string does obey to object id format

module.exports = {
    getAllBySubject
}