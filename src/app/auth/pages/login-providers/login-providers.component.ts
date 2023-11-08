import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { IUsuario } from '../../interfaces/iusuario';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-login-providers',
  templateUrl: './login-providers.component.html',
  styleUrls: ['./login-providers.component.css']
})
export class LoginProvidersComponent {
  form: FormGroup;
  bandera: boolean = false;

  constructor(
    private fb: FormBuilder,
    private _alert: AlertService,
    //private router: Router,
    //private _authentication: AuthenticationService
  ) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  handleSubmit() {
    if (this.form.invalid) {
      this._alert.error("Todos los campos son requeridos.")
      return
    }

    const credentials: IUsuario = {
      username: this.form.value.username,
      password: this.form.value.password
    };
  }

}
