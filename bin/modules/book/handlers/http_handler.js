const validator = require('../../../helpers/utils/validator');
const wrapper = require('../../../helpers/utils/wrapper');

const queryModel = require('../repositories/query/queryModel');
const queryHandler = require('../repositories/query/queryHandler');

const getAllBySubject = async (req, res, next) => {
    // get query params
    const subject = req.query.subject;
    console.log(subject)

    // validate query params
    const validateParam = await validator.isValidPayload(subject, queryModel.getAllBySubject);

    const getData = async (result) => {
        return result.err ? result : queryHandler.getAllBySubject(result.data)
    }

    const sendResponse = async (result) => {
        (result.err)
            ? wrapper.response(res, 'fail', result, 'Failed to get books data.')
            : wrapper.response(res, 'success', result, 'Successfully get books data.')
    }

    return sendResponse(await getData(validateParam));
}

module.exports = {
    getAllBySubject
}