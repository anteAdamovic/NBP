import { NBPPage } from './app.po';

describe('nbp App', function() {
  let page: NBPPage;

  beforeEach(() => {
    page = new NBPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
