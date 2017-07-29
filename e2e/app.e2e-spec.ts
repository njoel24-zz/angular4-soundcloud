import { Angular4SoundcloudPage } from './app.po';

describe('angular4-soundcloud App', () => {
  let page: Angular4SoundcloudPage;

  beforeEach(() => {
    page = new Angular4SoundcloudPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
