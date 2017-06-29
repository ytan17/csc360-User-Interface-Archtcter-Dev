import { browser, by, element } from 'protractor';

describe('App', () => {

  beforeEach(() => {
    // change hash depending on router LocationStrategy
    browser.get('/#/graph');
  });

  it('should have `Exchange Rate Trend Graph` x-large', () => {
    let subject = element(by.css('[x-large]')).getText();
    let result  = 'Exchange Rate Trend Graph';
    expect(subject).toEqual(result);
  });

});