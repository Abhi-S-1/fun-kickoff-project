const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app.js");
const server = app.server;

chai.should();
chai.use(chaiHttp);

describe("/POST logout", () => {
  it("it should return 200 and message", (done) => {
    chai
      .request(server)
      .post(`/auth/logout`)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.have
          .property("text")
          .eql("You have successfully logged out");
        done();
      });
  });
});
