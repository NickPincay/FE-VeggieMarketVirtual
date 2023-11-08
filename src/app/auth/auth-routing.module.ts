import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginProvidersComponent } from './pages/login-providers/login-providers.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'login-providers', component: LoginProvidersComponent },
      { path: '**', redirectTo: "login-providers" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
