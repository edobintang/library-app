const CommandUsecase = require('./commandUsecase');

// instantiate command usecase
const commandUsecase = new CommandUsecase();

const bookSchedule = async (data) => {
    return commandUsecase.bookSchedule(data);
}

module.exports = {
    bookSchedule
}