import { browser, by, element } from 'protractor';

describe('App', () => {

  beforeEach(() => {
    // change hash depending on router LocationStrategy
    browser.get('/#/profiles');
  });

  it('should have `Currency Profiles List:` x-large', () => {
    let subject = element(by.css('[x-large]')).getText();
    let result  = 'Currency Profiles List:';
    expect(subject).toEqual(result);
  });

});