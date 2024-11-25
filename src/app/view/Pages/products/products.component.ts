import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/Interfaces/product';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  products: Product[] = [];
  quantities: { [productId: number]: number } = {};
  maxQuantities: { [productId: number]: number } = {};
  quantityChange = new EventEmitter<{productId: number, quantity: number}>();
  addToCart = new EventEmitter<void>();

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    // Get data from resolver
    this.route.data.subscribe(data => {
      console.log('data', data)
      this.products = data['products'];
      this.products.forEach(product => {
        this.quantities[product.ProductId] = 0;
        this.maxQuantities[product.ProductId] = product.AvailablePieces || 0;
      });
    });
  }

  onQuantityChange(productId: number, event?: any, quantity?: number) {
    let value
    if(event) {
      value = parseInt(event.target.value)
    } else if (quantity) {
      value = quantity
    } else {
      value = 1
    }
    if (this.isValidQuantity(productId, value)) {
      this.quantities[productId] = value;
      this.quantityChange.emit({ productId, quantity: value });
    } else {
      this.quantities[productId] = value < 1 ? 1 : this.maxQuantities[productId];
      this.quantityChange.emit({
        productId,
        quantity: this.quantities[productId]
      });
    }
  }

  decreaseQuantity(productId: number) {
    if (this.quantities[productId] > 1) {
      this.quantities[productId]--;
      this.onQuantityChange(productId, null, this.quantities[productId]);
    }
  }

  increaseQuantity(productId: number) {
    if (this.quantities[productId] < this.maxQuantities[productId]) {
      this.quantities[productId]++;
      this.onQuantityChange(productId, null, this.quantities[productId]);
    }
  }

  isValidQuantity(productId: number, value: number): boolean {
    return !isNaN(value) &&
           value >= 1 &&
           value <= this.maxQuantities[productId];
  }

  getQuantity(productId: number): number {
    return this.quantities[productId] || 1;
  }

  getMaxQuantity(productId: number): number {
    return this.maxQuantities[productId] || 10;
  }

  trackByProduct(index: number, product: Product): number {
    return product.ProductId;
  }
}
