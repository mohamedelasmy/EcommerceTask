import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/Interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  products: Product[] = [];
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    // Get data from resolver
    this.route.data.subscribe(data => {
      console.log('data', data)
      this.products = data['products'];
    });
  }

  trackByProduct(index: number, product: Product): number {
    return product.ProductId;
  }
}
