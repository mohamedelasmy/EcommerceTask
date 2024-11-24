import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order } from 'src/app/core/Interfaces/order';
import { Product } from 'src/app/core/Interfaces/product';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit  {
// product-order.component.ts


  selectedCategory = 'All';
  searchTerm = '';
  orderItems: Order[] = [];
  orderForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.orderForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      companyName: ['', Validators.required],
      companyPhone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      companyEmail: ['', [Validators.required, Validators.email]],
      address: this.fb.group({
        street1: ['', Validators.required],
        street2: [''],
        city: ['', Validators.required],
        state: ['', Validators.required],
        postalCode: ['', Validators.required]
      }),
      notes: ['']
    });
  }

  getFilteredProducts() {
    // return this.products
    //   .filter(p => this.selectedCategory === 'All' || p.category === this.selectedCategory)
    //   .filter(p => p.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

  updateQuantity(product: Product, event: Event) {
    // const item = this.orderItems.find(i => i.product.id === product.id);
    // if (item) {
    //   item.quantity = quantity;
    // } else {
    //   this.orderItems.push({ product, quantity, size: product.sizes?.[0], color: product.colors?.[0] });
    // }
  }

  calculateTotal() {
    // return this.orderItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  }

  onSubmit() {
    if (this.orderForm.valid && this.orderItems.length > 0) {
      const orderData = {
        items: this.orderItems,
        customerInfo: this.orderForm.value,
        total: this.calculateTotal()
      };
      console.log('Order submitted:', orderData);
      // Implement your submit logic here
    }
  }
}
