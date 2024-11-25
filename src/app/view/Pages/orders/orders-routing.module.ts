import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { OrdersResolver } from 'src/app/core/reslovers/orders.resolver ';
import { ViewDetailsComponent } from './view-details/view-details.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent,
    resolve: {
      resolvedData: OrdersResolver
    }
  },
  {
    path: 'new-order',
    component: NewOrderComponent
  },
  {
    path: 'view-details',
    component: ViewDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
