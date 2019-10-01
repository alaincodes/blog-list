/* eslint-disable linebreak-style */
const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');

const api = supertest(app);

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/);
});

afterAll(() => {
  mongoose.connection.close();
});

test('there is no blog', async () => {
  const response = await api.get('/api/blogs');

  expect(response.body.length).toBe(0);
});

xtest('the first blog is about Alain', async () => {
  const response = await api.get('/api/blogs');

  expect(response.body[0].author).toBe('Alain');
});
