import { OnInit, Component } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';
import { HomeComponent } from './+home';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'ng2-survey-app-app',
  templateUrl: 'ng2-survey-app.component.html',
  styleUrls: ['ng2-survey-app.component.css'],
  directives: [MdToolbar, ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/', component: HomeComponent}
])
// FIXME: replace OnInit hack with useAsDefault
export class Ng2SurveyAppAppComponent implements OnInit {
  title = 'Survey Application';
  constructor(private router: Router) {}
  ngOnInit() {
    this.router.navigate(['/']);
  }
}
