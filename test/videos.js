// test/videos.js
const app = require("../server");
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const agent = chai.request.agent(app);

// Import the video model from our models folder so we
// we can use it in our tests.
const Video = require('../models/videos');
const User = require('../models/user');
const server = require('../server');

chai.should();
chai.use(chaiHttp);

describe('Videos', function() {
    const agent = chai.request.agent(server);
    // video that we'll use for testing purposes
    const newVideo = {
        title: 'video title',
        url: 'https://www.google.com',
        summary: 'video summary',
        genre: 'genre'
    };
    const user = {
            username: 'videostest',
            password: 'testvideos'
        };

    before(function (done) {
        agent
        .post('/sign-up')
        .set("content-type", "application/x-www-form-urlencoded")
        .send(user)
        .then(function (res) {
            done();
        })
        .catch(function (err) {
            done(err);
        });
    });

    it("should create with valid attributes at POST /videos/new", function (done) {
        // Checks how many videos there are now
    Video.estimatedDocumentCount()
    .then(function (initialDocCount) {
        agent
        .request(app)
            .video("/videos/new")
            // This line fakes a form video,
            // since we're not actually filling out a form
            .set("content-type", "application/x-www-form-urlencoded")
            // Make a request to create another
            .send(newVideo)
            .then(function (res) {
                Video.estimatedDocumentCount()
                    .then(function (newDocCount) {
                        // Check that the database has one more video in it
                        expect(res).to.have.status(200);
                        // Check that the database has one more video in it
                        expect(newDocCount).to.be.equal(initialDocCount + 1)
                        done();
                    })
                    .catch(function (err) {
                        done(err);
                    });
            })
            .catch(function (err) {
                done(err);
            });
    })
  .catch(function (err) {
      done(err);
  });

  });

  after(function (done) {
    Video.findOneAndDelete(newVideo)
    .then(function (res) {
        agent.close()
  
        User.findOneAndDelete({
            username: user.username
        })
          .then(function (res) {
              done()
          })
          .catch(function (err) {
              done(err);
          });
    })
    .catch(function (err) {
        done(err);
    });
  });
});