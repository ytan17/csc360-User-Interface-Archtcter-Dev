import { browser, by, element } from 'protractor';

describe('App', () => {

  beforeEach(() => {
    // change hash depending on router LocationStrategy
    browser.get('/#/popular-list');
  });

  it('should have `Popular Currency List:` x-large', () => {
    let subject = element(by.css('[x-large]')).getText();
    let result  = 'Popular Currency List:';
    expect(subject).toEqual(result);
  });

});