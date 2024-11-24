import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './Pages/products/products.component';
import { ProductsResolver } from '../core/reslovers/products.resolver';

const routes: Routes = [
  {path: '', loadChildren: () => import('./Pages/products/products.module').then(m => m.ProductsModule)},
  {path: 'my-orders', loadChildren: () => import('./Pages/orders/orders.module').then(m => m.OrdersModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
