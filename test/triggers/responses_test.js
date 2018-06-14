const plg = require('pluga-plg');
const expect = require('chai').expect;
const trigger = require('../../lib/triggers/responses');

describe('Trigger: Responses', function () {
  it('get new responses and return it as array', function (done) {
    const event = {
      meta: { lastReqAt: process.env.LAST_REQ_AT },
      auth: {
        accessToken: process.env.ACCESS_TOKEN,
        uri: process.env.URI
      },
      input: {
        formId: process.env.FORM_ID
      }
    };

    trigger.handle(plg, event).then((result) => {
      const item = result.find((item) => {
        return item.landing_id === '037dea694d8a4ac3e5e4680c4c4c6014';
      });

      expect(item).to.be.include({
        landing_id: '037dea694d8a4ac3e5e4680c4c4c6014',
        TNdTToxd9HQh: 'A',
        teste: 'Marcelo',
        score: 50,
        submitted_at: '2018-06-14T03:26:15Z'
      });

      done();
    }).catch(done);
  });
});
