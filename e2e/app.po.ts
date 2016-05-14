export class Ng2SurveyAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-survey-app-app h1')).getText();
  }
}
