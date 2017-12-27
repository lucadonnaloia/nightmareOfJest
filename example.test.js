const Nightmare = require('nightmare');

describe('When visiting the homepage', () => {
  test('it should have "Google" as title', done => {
    jest.setTimeout(60000);
    let page = Nightmare({ show: false })
      .goto('http://www.google.it');
    let text = page.evaluate(() => document.title)
      .end()
      .then(result => { done(); })
      .catch(done);

    expect(text).toContain('Google');
  });
});

/* describe('/auth (Login Page)', () => {
  it('should load without error', done => {
    nightmare
      .goto('https://gethoodie.com/auth')
      .end()
      .then(result => { done(); })
      .catch(done);
  });
}); */
