import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Order } from 'src/app/core/Interfaces/order';
import { Product } from 'src/app/core/Interfaces/product';

@Component({
  selector: 'app-view-details',
  standalone: false,
  templateUrl: './view-details.component.html',
  styleUrl: './view-details.component.scss'
})
export class ViewDetailsComponent implements OnInit {
  orderForm: FormGroup;
  totalPrice: number = 0;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ViewDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    console.log('data', data)
    this.orderForm = this.fb.group({
      personal: this.fb.group({
        firstName: [{ value: '', disabled: true }],
        lastName: [{ value: '', disabled: true }]
      }),
      contact: this.fb.group({
        phone: [{ value: '', disabled: true }],
        email: [{ value: '', disabled: true }]
      }),
      address: this.fb.group({
        street1: [{ value: '', disabled: true }],
      }),
      notes: ['']
    });
  }

  ngOnInit(): void {
    this.calculateSubtotal();
    this.orderForm.get('personal.firstName')?.patchValue(this.data.order.user.Name);
    this.orderForm.get('contact.phone')?.patchValue(this.data.order.user.Phone);
    this.orderForm.get('contact.email')?.patchValue(this.data.order.user.Email);
    this.orderForm.get('address.street1')?.patchValue(this.data.order.user.Address);
  }

  calculateSubtotal(): number {
    if (!this.data?.order?.newProductsList?.length) return 0;
    return this.data.order.newProductsList.reduce((sum: any, item: any) => {
      const itemTotal = item.product.ProductPrice * item.orderedQuantity;
      this.totalPrice = sum + itemTotal
      console.log('totalPrice', this.totalPrice)
      return this.totalPrice;
    }, 0);
  }

  close() {
    this.dialogRef.close();
  }
}
