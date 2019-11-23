// var request = require('supertest');
// var app = require('../app.js');
// describe('GET /', function() {
//  it('respond with hello world', function(done) {
//  //navigate to root and check the the response is "hello world"
//  request(app).get('/').expect('hello world', done);
//  });
// });
const { expect } = require('chai');
//
// describe('sample test', function () {
//   it('should work', async function () {
//     console.log(await browser.version());
//
//     expect(true).to.be.true;
//   });
// });

describe('sample test', function () {
  let page;

  before (async function () {
    page = await browser.newPage();
    await page.goto('http://localhost:3000');
  });

  after (async function () {
    await page.close();
  })

  it('should have the correct page title', async function () {
    expect(await page.title()).to.eql('demo cicd');
    done();
  });

  // it('should have a heading', async function () {
  //   const HEADING_SELECTOR = 'h1';
  //   let heading;
  //
  //   await page.waitFor(HEADING_SELECTOR);
  //   heading = await page.$eval(HEADING_SELECTOR, heading => heading.innerText);
  //
  //   expect(heading).to.eql('Page Title');
  // });
  //
  // it('should have a single content section', async function () {
  //   const BODY_SELECTOR = '.main-content';
  //
  //   await page.waitFor(BODY_SELECTOR);
  //
  //   expect(await page.$$(BODY_SELECTOR)).to.have.lengthOf(1);
  // });
});
