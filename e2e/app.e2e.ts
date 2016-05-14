import { Ng2SurveyAppPage } from './app.po';

describe('ng2-survey-app App', function() {
  let page: Ng2SurveyAppPage;

  beforeEach(() => {
    page = new Ng2SurveyAppPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2-survey-app works!');
  });
});
