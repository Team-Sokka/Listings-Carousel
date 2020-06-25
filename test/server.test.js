const app = require('../server/index.js');
const supertest = require('supertest');
const request = supertest(app);

it('Retrieves the endpoint', async done => {
  const response = await request.get('/listings')

  expect(response.status).toBe(200)
  expect(response.body.data).toBeTruthy()
  .done()
});