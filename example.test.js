const Nightmare = require('nightmare');

describe('When visiting the homepage', () => {
  test('using promises', (done) => {
    Nightmare({show: false})
      .goto('http://www.google.it')
      .wait('body')
      .evaluate(() => document.title)
      .end()
      .then((title) => {
        expect(title).toBe('Google_');
        console.log(title);
        done();
      });
  });
});
