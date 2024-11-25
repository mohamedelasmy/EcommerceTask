import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Order } from 'src/app/core/Interfaces/order';
import { Product } from 'src/app/core/Interfaces/product';
import { ViewDetailsComponent } from '../view-details/view-details.component';

@Component({
  selector: 'app-new-order',
  standalone: false,
  templateUrl: './new-order.component.html',
  styleUrl: './new-order.component.scss'
})
export class NewOrderComponent implements OnInit  {
  selectedCategory = 'All';
  searchTerm = '';
  orderItems: Order[] = [];
  orderForm!: FormGroup;
  products : Product[] = []
  totalPrice: number = 0;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NewOrderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

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

  updateQuantity(product: Product, event: Event) {
    // const item = this.orderItems.find(i => i.product.id === product.id);
    // if (item) {
    //   item.quantity = quantity;
    // } else {
    //   this.orderItems.push({ product, quantity, size: product.sizes?.[0], color: product.colors?.[0] });
    // }
  }

  calculateSubtotal() {
    // if (!this.data?.order?.newProductsList?.length) return 0;
    // return this.data.order.newProductsList.reduce((sum: any, item: any) => {
    //   const itemTotal = item.product.ProductPrice * item.orderedQuantity;
    //   this.totalPrice = sum + itemTotal
    //   console.log('totalPrice', this.totalPrice)
    //   return this.totalPrice;
    // }, 0);
  }

  onSubmit() {
    if (this.orderForm.valid && this.orderItems.length > 0) {
      const orderData = {
        items: this.orderItems,
        customerInfo: this.orderForm.value,
        // total: this.calculateTotal()
      };
      console.log('Order submitted:', orderData);
      // Implement your submit logic here
    }
  }

  close() {
    this.dialogRef.close();
  }
}
