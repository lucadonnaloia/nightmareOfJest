const Nightmare = require('nightmare');

describe('When visiting the homepage', () => {
  test('using promises', (done) => {
    Nightmare({show: false})
      .goto('http://www.google.it')
      .evaluate(() => document.title)
      .end()
      .then((title) => {
        expect(title).toBe('Google');
        // console.log(title);
        done();
      });
  });
});
