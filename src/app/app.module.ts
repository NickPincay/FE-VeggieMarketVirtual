import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './auth/auth.module';
import { AdminsModule } from './modules/admins/admins.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UsersModule,
    AuthModule,
    AdminsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
