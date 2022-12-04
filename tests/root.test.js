const request = require("supertest");
const { express } = require("../application");

describe("Test the root path", function () {
  test("It should response the GET method", async function () {
    const response = await request(express).get("/");
    expect(response.statusCode).toBe(200);
  });
});

describe("Test the root path response", function () {
    test("Response should be an object consist of message as a key", async function () {
        const response = await request(express).get("/");
        expect(response.body).toEqual({ message: "hello world"});
    });
});