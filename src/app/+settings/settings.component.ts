import { Component } from '@angular/core';
import { MdInput } from '@angular2-material/input';
import { MdCheckbox } from '@angular2-material/checkbox';

@Component({
  moduleId: module.id,
  selector: 'app-settings',
  templateUrl: 'settings.component.html',
  styleUrls: ['settings.component.css'],
  directives: [MdInput, MdCheckbox]
})
export class SettingsComponent {
  public settings = {
    isSecure: true,
    host: 'example.com'
  };
}
