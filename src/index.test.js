const request = require("supertest");
const app = require("./index");

describe("Testando o path root", () => {
  test('A resposta deve ser: "Olá tudo bem?"', async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Olá tudo bem?");
  });
});
