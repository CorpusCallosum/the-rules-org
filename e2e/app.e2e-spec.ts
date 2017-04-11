import { TheRulesPage } from './app.po';

describe('the-rules App', () => {
  let page: TheRulesPage;

  beforeEach(() => {
    page = new TheRulesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
