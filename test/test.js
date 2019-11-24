// var request = require('supertest');
// var app = require('../app.js');
// describe('GET /', function() {
//  it('respond with hello world', function(done) {
//  //navigate to root and check the the response is "hello world"
//  request(app).get('/').expect('hello world', done);
//  });
// });
const { expect } = require('chai');
// var assert = require('assert');
// var sinon = require('sinon');
// var MockReq = require('mock-req');
// var MockRes = require('mock-res');
// var http = require('http');
var robot = require('robotjs');
//
// describe('sample test', function () {
//   it('should work', async function () {
//     console.log(await browser.version());
//
//     expect(true).to.be.true;
//   });
// });

describe('cicd test', function () {
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
  });

  it('should have a send button', async function () {
    const BUTTON_SELECTOR = 'button';
    let heading;

    await page.waitFor(BUTTON_SELECTOR);
    button = await page.$eval(BUTTON_SELECTOR, button => button.innerText);

    expect(button).to.eql('Send');
  });

  it('should send a message', async function(){
        // Speed up the mouse.
    robot.setMouseDelay(2);

    var screenSize = robot.getScreenSize();
    var height = screenSize.height;
    var width = screenSize.width;
    robot.moveMouse(width / 3, height - 360);
    robot.mouseClick();
    await robot.typeString("Hello World");
    await robot.keyTap("enter");

    const MESSAGE_SELECTOR = 'li';
    let message;

    await page.waitFor(MESSAGE_SELECTOR);
    message = await page.$eval(MESSAGE_SELECTOR, message => message.innerText);

    expect(message).to.eql('Hello World');
  });

});
