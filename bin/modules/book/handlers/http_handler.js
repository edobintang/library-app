const validator = require('../../../helpers/utils/validator');
const wrapper = require('../../../helpers/utils/wrapper');

const queryModel = require('../repositories/query/queryModel');
const queryHandler = require('../repositories/query/queryHandler');

const commandModel = require('../repositories/command/commandModel');
const commandHandler = require('../repositories/command/commandHandler');

// get all book by subject handler
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

// post book schedule
const postBookSchedule = async (req, res, next) => {
    const payload = req.body;

    // validate params
    const validateParam = await validator.isValidPayload(payload, commandModel.postBookSchedule);

    const postData = async (result) => {
       return result.err ? result : commandHandler.bookSchedule(result.data)
    }

    const sendResponse = async (result) => {
        (result.err)
            ? wrapper.response(res, 'fail', result, 'Failed to create booking schedule')
            : wrapper.response(res, 'success', result, 'Successfully create booking schedule')
    }

    return sendResponse(await postData(validateParam))
}

module.exports = {
    getAllBySubject,
    postBookSchedule
}