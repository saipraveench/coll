import { CreateJqwidgetsAngularAppPage } from './app.po';

describe('grid App', () => {
  let page: CreateJqwidgetsAngularAppPage;

  beforeEach(() => {
    page = new CreateJqwidgetsAngularAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
