// orders.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/core/Interfaces/order';
import { Product } from 'src/app/core/Interfaces/product';
import { User } from 'src/app/core/Interfaces/user';
import { DatePipe } from '@angular/common';
import { PageEvent } from '@angular/material/paginator';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'; // Add this line

interface OrderWithUserName extends Order {
  user?: User;
  products?: Product[]
}

@Component({
  selector: 'app-orders',
  standalone: false,
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})

export class OrdersComponent implements OnInit {
  orginalOrders: Order[] = []
  products: Product[] = [];
  users: User[] = [];
  orders: OrderWithUserName[] = []
  pageSize = 10;
  currentPage = 0;
  totalItems = 0;
  dialogRef!: MatDialogRef<any>;

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
  ) { }
  ngOnInit() {
    // Get data from resolver
    this.route.data.subscribe(data => {
      console.log('data', data)
      this.orginalOrders = data['resolvedData'].orders;
      this.users = data['resolvedData'].users;
      this.products = data['resolvedData'].products;
      this.totalItems = this.orginalOrders.length
    });
    this.prepareOrderData()
  }

  trackByOrder(index: number, order: Order): number {
    return order.OrderId;
  }

  prepareOrderData() {
    this.orginalOrders.forEach(order => {
      const user = this.users.find(user => user.Id === order.UserId);
      let productList: any[] = []
      order.Products.forEach(productOrder => {
        const product = this.products.find(product => product.ProductId === productOrder.ProductId)
        let newProductList = {
          product:product,
          orderedQuantity: productOrder.Quantity
        }
        if (product)
          productList.push(newProductList)
      })
      let newOrderObject = {
        ...order,
        OrderDate: new Date(order.OrderDate),
        user: user,
        newProductsList: productList
      }
      this.orders.push(newOrderObject)
    })
  }

  getCurrentPageData() {
    const startIndex = this.currentPage * this.pageSize;
    return this.orders.slice(startIndex, startIndex + this.pageSize);
  }

  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  showOrderDetails(order: any) {
    this.dialogRef = this.dialog.open(ViewDetailsComponent, {
      position: { right: '0' },
      height: "100%",
      width: "70%",
      // hasBackdrop: false,
      disableClose: true,
      data: { order: order },
    });
  }
}

