const request = require('supertest');
const app = require('./app'); // Adjust the path as necessary

describe('GET /', () => {
    it('responds with Hello, Scotland Yard!', (done) => {
        request(app)
            .get('/')
            .expect('Hello, Scotland Yard!', done);
    });
});
