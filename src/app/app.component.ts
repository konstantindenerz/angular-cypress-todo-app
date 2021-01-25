import {Component} from '@angular/core';
import {SecurityService} from './services/security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public securityService: SecurityService) {
  }
}
