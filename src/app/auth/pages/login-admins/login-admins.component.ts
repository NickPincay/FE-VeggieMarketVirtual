import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';
import { IUsuario } from '../../interfaces/iusuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admins',
  templateUrl: './login-admins.component.html',
  styleUrls: ['./login-admins.component.css']
})
export class LoginAdminsComponent {
  bandera: boolean = false;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _alert: AlertService,
    private router: Router,
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

    this.router.navigate(['/dashboard/'])

  }

}
