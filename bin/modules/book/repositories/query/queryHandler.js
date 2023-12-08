const QueryRepository = require('./queryRepository')
const QueryUsecase = require('./queryUsecase')

// instantiate query repo
const queryRepository = new QueryRepository();

// instantiate query usecase
const queryUsecase = new QueryUsecase(queryRepository);

const getAllBySubject = async (subject) => {
    return queryUsecase.getAllBySubject(subject);
}

module.exports = {
    getAllBySubject
}