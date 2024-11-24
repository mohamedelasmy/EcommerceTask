import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs'; // Add missing operators
import { Product } from '../Interfaces/product';
import { Order } from '../Interfaces/order';
import { User } from '../Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'assets/data';

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}/orders.json`).pipe(
      catchError(error => {
        console.error('Error fetching orders:', error);
        return throwError(() => new Error('Failed to fetch orders'));
      })
    );
  }

  // Missing type annotation for return type
  getProducts(): Observable<Product[]> { // Add return type
    // Remove console.log or use proper logging service
    return this.http.get<Product[]>(`${this.apiUrl}/products.json`).pipe(
      catchError(error => {
        console.error('Error fetching products:', error);
        return throwError(() => new Error('Failed to fetch products'));
      })
    );
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users.json`).pipe(
      catchError(error => {
        console.error('Error fetching users:', error);
        return throwError(() => new Error('Failed to fetch users'));
      })
    );
  }
}
