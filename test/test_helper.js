/**
 * Place your global test hooks here.
 *
 * See more at:
 * - [mocha](https://mochajs.org)
 * - [chai](https://chaijs.com)
 */
if(process.env.AXIOS_DEBUG) {require('axios-debug')(require('axios'))};

before(function (done) {
  console.log('Testing Typeform functions...');

  done();
});

