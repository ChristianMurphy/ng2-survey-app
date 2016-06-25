import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { provideRouter, RouterConfig } from '@angular/router';
import { AppComponent, environment } from './app/';
import { HomeComponent } from './app/+home';
import { SettingsComponent } from './app/+settings';
import { QuestionComponent } from './app/+question';


if (environment.production) {
  enableProdMode();
}

const routes: RouterConfig = [
  {path: '', component: HomeComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'question/:number', component: QuestionComponent}
];

bootstrap(AppComponent, [HTTP_PROVIDERS, [provideRouter(routes)]]);

