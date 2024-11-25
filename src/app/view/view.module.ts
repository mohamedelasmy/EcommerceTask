import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewRoutingModule } from './view-routing.module';
import { ProductsModule } from './Pages/products/products.module';
import { OrdersModule } from './Pages/orders/orders.module';


@NgModule({
  declarations: [
  ],
  imports: [
    ViewRoutingModule,
    ProductsModule,
    OrdersModule
  ],
  providers: []
})
export class ViewModule { }
