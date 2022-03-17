const request = require("supertest");
const app = require("../app");
const Users = require('../models/users.js');
const mongoose = require('mongoose');

describe("Test the root path", () => {
  test("Get the main page", () => {
    return request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });

  test("Create new users", async () => {
    return request(app).post('/users').send({
      username: 'Habibie',
      password: 'Habibie123',
      poin: 90
    }).then(response => {
      console.log(response);
      expect(response.statusCode).toBe(200);
    });
  });

  test("GET /users", () => {
    return request(app)
      .get("/users")
      .then(response => {
        console.log(response.body);
        expect(response.statusCode).toBe(200);
      });
  });

  afterAll(() => {
    console.log("Cleaning up and closing...");
    Users.deleteMany({
      username: 'Habibie'
    });
    mongoose.connection.close();
  });
});