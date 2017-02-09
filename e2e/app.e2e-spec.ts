import { PpPage } from './app.po';

describe('pp App', function() {
  let page: PpPage;

  beforeEach(() => {
    page = new PpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
