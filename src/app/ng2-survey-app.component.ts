import { OnInit, Component } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

import { MdToolbar } from '@angular2-material/toolbar';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

import { HomeComponent } from './+home';
import { SettingsComponent } from './+settings';
import { QuestionComponent } from './+question';

@Component({
  moduleId: module.id,
  selector: 'ng2-survey-app-app',
  templateUrl: 'ng2-survey-app.component.html',
  styleUrls: ['ng2-survey-app.component.css'],
  directives: [MdToolbar, ROUTER_DIRECTIVES, MdIcon],
  providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, MdIconRegistry]
})
@Routes([
  {path: '/', component: HomeComponent},
  {path: '/settings', component: SettingsComponent},
  {path: '/question/:number', component: QuestionComponent}
])
// FIXME: replace OnInit hack with useAsDefault
export class Ng2SurveyAppAppComponent implements OnInit {
  title: string = 'Survey Application';
  constructor(private router: Router) {}
  ngOnInit() {
    this.router.navigate(['/']);
  }
}
