const { InternalServerError } = require('../../../../helpers/error');
const wrapper = require('../../../../helpers/utils/wrapper')

class CommandUsecase {
    // constructor in case we need repository as its attrubte

    // method for create attendant schedule
    async bookSchedule(data) {
        try {
            console.log(data)
            // 1. just think that need to validate the existence of user
            // generally, we need to get the user data for further consideration

            // 2. just think that need the availability of the schedule input
            // generally, we need to get the schedule data from any data storage

            // 3. just think that need to validate the booked book
            // generally, need to get by id to external API to validate the existence of booked book

            // just return the success info
            return wrapper.data("Successfully record the booking schedule")
        } catch (error) {
            return wrapper.error(new InternalServerError("Internal server error."))
        }
    }
}

module.exports = CommandUsecase;