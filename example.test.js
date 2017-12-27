const Nightmare = require('nightmare');

describe('When visiting the homepage', () => {
  beforeAll(() => {
    jest.setTimeout(20000);
  });

  test('it should return "Google" as title', (done) => {
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
