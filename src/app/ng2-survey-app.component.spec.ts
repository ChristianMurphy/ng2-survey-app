import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2SurveyAppAppComponent } from '../app/ng2-survey-app.component';

beforeEachProviders(() => [Ng2SurveyAppAppComponent]);

describe('App: Ng2SurveyApp', () => {
  it('should create the app',
      inject([Ng2SurveyAppAppComponent], (app: Ng2SurveyAppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2-survey-app works!\'',
      inject([Ng2SurveyAppAppComponent], (app: Ng2SurveyAppAppComponent) => {
    expect(app.title).toEqual('ng2-survey-app works!');
  }));
});
