import { Component, OnInit } from '@angular/core';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

interface Survey {
  link: string;
  start: string;
  end: string;
}

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [MD_LIST_DIRECTIVES, MD_CARD_DIRECTIVES]
})
export class HomeComponent {
  surveys: Survey[] = [
    {
      link: '/question/1',
      start: 'today',
      end: 'tomorrow'
    }
  ];
}
