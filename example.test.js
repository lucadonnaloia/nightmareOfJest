const Nightmare = require('nightmare');

describe('When visiting google homepage', () => {
  beforeAll(() => {
    jest.setTimeout(20000);
  });
  test('should return "Google" as page title', (done) => {
    Nightmare({show: true})
      .goto('http://www.google.it')
      .evaluate(() => document.title)
      .end()
      .then((title) => {
        expect(title).toBe('Google');
        done();
      });
  });
});

describe('When visiting duckduckgo homepage', () => {
  beforeAll(() => {
    jest.setTimeout(20000);
  });
  test('should find the nightmare github link first', (done) => {
    Nightmare({show: true})
      .goto('https://duckduckgo.com')
      .type('#search_form_input_homepage', 'github nightmare')
      .click('#search_button_homepage')
      .wait('#links_wrapper')
      .evaluate(() =>
        document.querySelector('#r1-0 > div > h2 > a.result__a').href
      )
      .end()
      .then((link) => {
        expect(link).toBe('https://github.com/segmentio/nightmare');
        done();
      });
  });
});
