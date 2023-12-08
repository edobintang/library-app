const { response } = require('express');
const { InternalServerError, NotFoundError } = require('../../../../helpers/error');
const wrapper = require('../../../../helpers/utils/wrapper')

class QueryUsecase {
    constructor(queryRepository) {
        this.queryRepository = queryRepository;
    }

    // get all books by subject method
    async getAllBySubject(subject) {
        try {
            const response = await this.queryRepository.findBySubject(subject);
            const result = response.data.works.map(book => ({
                Id: book.key,
                Title: book.title,
                Authors: book.authors,
                EditionNumber: book.edition_count
            }))

            return wrapper.data(result)
        } catch (error) {
            // handling error type from external API here
            if (error.response.status == 404) {
                return wrapper.error(new NotFoundError("Books not found."))
            }

            return wrapper.error(new InternalServerError("Internal server error."))
        }
    }
}

module.exports = QueryUsecase