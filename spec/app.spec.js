var Request = require("request");

//make sure swagger start is running before testing!!
describe("GET /", () => {
  var data = {};
  beforeAll(done => {
    Request.get(
      "http://localhost:10010/customer/34d4038c02a17bb5e9424f702abc894d7a781a8b",
      (error, response, body) => {
        data.status = response.statusCode;
        data.body = JSON.parse(body);
        done();
      }
    );
  });
  it("Status 200", () => {
    expect(data.status).toBe(200);
  });
  it("Body", () => {
    expect(data.body.name).toBe("John Snow");
  });
});

describe("GET /customer", () => {
  var data = {};
  beforeAll(done => {
    Request.get("http://localhost:10010/customer", (error, response, body) => {
      data.status = response.statusCode;
      data.body = JSON.parse(body);
      done();
    });
  });
  it("Status 200", () => {
    expect(data.status).toBe(200);
  });
  it("Body", () => {
    expect(data.body.customers[0].name).toBe("Jonathan Stricklin");
  });
});
