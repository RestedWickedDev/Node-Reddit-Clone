// test/posts.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const { describe, it } = require('mocha');
const agent = chai.request.agent(app);

// Import the Post model from our models folder so we
// we can use it in our tests.
const Post = require('../models/post');
const app = require('../server');

const should = chai.should();

chai.use(chaiHttp);

describe('Posts', function () {
  // Post that we'll use for testing purposes
  const newPost = {
    title: 'post title',
    url: 'https://www.google.com',
    summary: 'post summary'
  };
  it('should create with valid attributes at POST /posts/new', function (done) {
    // TODO: test code goes here!
  });
});