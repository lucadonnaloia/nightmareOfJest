const Nightmare = require('nightmare');

describe('When visiting the homepage', function () {
  test('it should have "Google" as title', async function () {
    let page = Nightmare({ show: true })
      .goto('http://www.google.it');
    let text = await page.evaluate(() => document.title)
      .end();

    expect(text).toContain('Google');
  });
});
