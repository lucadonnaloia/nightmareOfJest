const Nightmare = require('nightmare');
const timeout = 60000;

describe('When visiting google homepage', () => {
  test('should return "Google" as page title', (done) => {
    Nightmare({show: true})
      .goto('http://www.google.it')
      .evaluate(() => document.title)
      .end()
      .then((title) => {
        expect(title).toBe('Google');
        done();
      });
  }, timeout);
});

describe('When visiting duckduckgo homepage', () => {
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
  }, timeout);
});
