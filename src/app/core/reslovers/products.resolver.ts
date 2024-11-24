import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { ApiService } from "../services/api.service";
import { catchError, Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsResolver implements Resolve<any> {

  constructor(
    private apiService: ApiService,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.apiService.getProducts().pipe(
      catchError(error => {
        console.error('Error fetching products:', error);
        return of({ products: [] });
      })
    );
  }
}
