import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from './material.module';
import { UsersRoutingModule } from '../modules/users/users-routing.module';

@NgModule({
  declarations: [
    NavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UsersRoutingModule
  ], 
  exports: [
    NavComponent,
    FooterComponent
  ]
})
export class SharedModule { }
