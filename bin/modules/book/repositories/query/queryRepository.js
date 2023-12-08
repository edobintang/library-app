const axios = require('axios')
const baseUrl = process.env.EXTERNAL_API;

class QueryRepository {
    // find by subject
    async findBySubject(subject) {
        const result = await fetchBookBySubject(subject)
        return result;
    }
}

// function for generating subject-based url
function generateSubjectBasedUrl(baseUrl, subject) {
    return `${baseUrl}/${subject}.json`
}

// function for fetching data from external API
async function fetchBookBySubject(subject) {
    // define subjet-based url
    const subjectBasedUrl = generateSubjectBasedUrl(baseUrl, subject);

    // make api call to external API
    return axios.get(subjectBasedUrl);
}

module.exports = QueryRepository;