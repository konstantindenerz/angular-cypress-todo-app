import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SecurityService} from '../../services/security.service';

@Component({
  selector: 'labs-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent {
  form: FormGroup;

  constructor(formBuilder: FormBuilder, private securityService: SecurityService) {
    this.form = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(): void {
    this.securityService.signin(this.form.value);
  }
}
