import { BookingPage } from './app.po';

describe('booking App', () => {
  let page: BookingPage;

  beforeEach(() => {
    page = new BookingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
