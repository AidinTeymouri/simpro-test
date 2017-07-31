import { SimproTestPage } from './app.po';

describe('simpro-test App', () => {
  let page: SimproTestPage;

  beforeEach(() => {
    page = new SimproTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
