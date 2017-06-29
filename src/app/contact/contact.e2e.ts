import { browser, by, element } from 'protractor';

describe('App', () => {

  beforeEach(() => {
    // change hash depending on router LocationStrategy
    browser.get('/#/contact');
  });

 it('should have `Contact Us` x-large', () => {
    let subject = element(by.css('[x-large]')).getText();
    let result  = 'Contact Us';
    expect(subject).toEqual(result);
  });

});