import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './Pages/products/products.component';
import { OrdersComponent } from './Pages/orders/orders.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsResolver } from '../core/reslovers/products.resolver';
import { ApiService } from '../core/services/api.service';


@NgModule({
  declarations: [
    ProductsComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    SharedModule,
    HttpClientModule
    // ListLeadModule
  ],
  providers: [
    ProductsResolver,
    ApiService
  ]
})
export class ViewModule { }
