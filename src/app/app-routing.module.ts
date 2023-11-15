import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardGuard } from './core/guards/card.guard';
import { NavigatorComponent } from './modules/admins/page/navigator/navigator.component';

const routes: Routes = [
  { path: '', redirectTo: 'veggiemarket', pathMatch: 'full' },
  {
    path: 'veggiemarket',
    loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'billing',
    loadChildren: () => import('./modules/billing/billing.module').then(m => m.BillingModule),
    canActivate: [CardGuard]
  },
  {
    path: 'dashboard',
    component: NavigatorComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/admins/admins.module').then(m => m.AdminsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
