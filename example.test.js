const Nightmare = require('nightmare');

describe('When visiting the homepage', () => {
  test('it should return "Google" as title', (done) => {
    Nightmare({show: false})
      .goto('http://www.google.it')
      .evaluate(() => document.title)
      .end()
      .then((title) => {
        expect(title).toBe('Google');
        done();
      });
  });
});
