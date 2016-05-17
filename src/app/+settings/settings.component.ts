import { Component } from '@angular/core';
import { MdInput } from '@angular2-material/input';
import { MdCheckbox } from '@angular2-material/checkbox';

interface Settings {
  isSecure: boolean;
  host: string;
}

@Component({
  moduleId: module.id,
  selector: 'app-settings',
  templateUrl: 'settings.component.html',
  styleUrls: ['settings.component.css'],
  directives: [MdInput, MdCheckbox]
})
export class SettingsComponent {
  public settings: Settings = {
    isSecure: true,
    host: 'example.com'
  };
}
