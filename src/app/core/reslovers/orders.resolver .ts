import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { ApiService } from "../services/api.service";
import { catchError, forkJoin, Observable, of } from "rxjs";
import { Order } from "../Interfaces/order";
import { User } from "../Interfaces/user";
import { Product } from "../Interfaces/product";


export interface ResolvedData {
  orders: Order[];
  users: User[];
  products: Product[]
}

@Injectable({
  providedIn: 'root'
})
export class OrdersResolver implements Resolve<ResolvedData> {

  constructor(
    private apiService: ApiService,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ResolvedData> {
    return forkJoin({
      orders: this.apiService.getOrders().pipe(
        catchError(error => {
          console.error('Error fetching orders:', error);
          return of([]);
        })
      ),
      users: this.apiService.getUsers().pipe(
        catchError(error => {
          console.error('Error fetching users:', error);
          return of([]);
        })
      ),
      products: this.apiService.getProducts().pipe(
        catchError(error => {
          console.error('Error fetching products:', error);
          return of([]);
        })
      ),
    });
  }
}
