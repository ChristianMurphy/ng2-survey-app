import { Component } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdButton } from '@angular2-material/button';
import { TimeAgoPipe } from 'angular2-moment';
import * as moment from 'moment';

interface Survey {
  name: string;
  link: string;
  start: Date;
  end: Date;
}

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [MD_CARD_DIRECTIVES, MdButton],
  pipes: [TimeAgoPipe]
})
export class HomeComponent {
  surveys: Survey[] = [
    {
      name: 'Daily Survey',
      link: '/question/1',
      start: moment().startOf('day').subtract(1, 'day').toDate(),
      end: moment().endOf('day').toDate()
    },
    {
      name: 'Weekly Survey',
      link: '/question/1',
      start: moment().startOf('day').subtract(1, 'week').toDate(),
      end: moment().endOf('day').toDate()
    }
  ];
}
