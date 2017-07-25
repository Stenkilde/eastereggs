import { EastermarvelPage } from './app.po';

describe('eastermarvel App', () => {
  let page: EastermarvelPage;

  beforeEach(() => {
    page = new EastermarvelPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
