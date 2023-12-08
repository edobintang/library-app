const joi = require('joi');

const postBookSchedule = joi.object({
    username: joi.string().required(),
    book_key: joi.string().required(),
    schedule: joi.date().iso().required()
});

module.exports = {
    postBookSchedule
}