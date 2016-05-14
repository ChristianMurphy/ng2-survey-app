import { Component } from '@angular/core';
import { MdButton } from '@angular2-material/button';

@Component({
  moduleId: module.id,
  selector: 'ng2-survey-app-app',
  templateUrl: 'ng2-survey-app.component.html',
  styleUrls: ['ng2-survey-app.component.css'],
  directives: [MdButton]
})
export class Ng2SurveyAppAppComponent {
  title = 'ng2-survey-app works!';
}
