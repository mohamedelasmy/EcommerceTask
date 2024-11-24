import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductsResolver } from 'src/app/core/reslovers/products.resolver';
import { NewProductComponent } from './new-product/new-product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    resolve: {
      products:ProductsResolver
    }
  },
  {
    path: 'new-product',
    component: NewProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
