import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProvidersPageComponent } from './pages/providers-page/providers-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardProductComponent } from './components/card-product/card-product.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomePageComponent,
    ProvidersPageComponent,
    ProductsPageComponent,
    CardProductComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
