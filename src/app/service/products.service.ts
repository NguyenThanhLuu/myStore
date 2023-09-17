import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductInfo } from '../interfaces/product-info.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  product$ = new BehaviorSubject(null);
  productObs = this.product$.asObservable();
  listOfProducts: ProductInfo[] = [];
  cartProductsServiceSide: ProductInfo[] = [];

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductInfo[]> {
    return this.http.get<ProductInfo[]>('http://localhost:4200/assets/data.json');
  }

  addProductToCart(product: ProductInfo): void {
    this.cartProductsServiceSide.push(product);
  }

  removeProductFromCart(product: ProductInfo): void {
    this.cartProductsServiceSide = this.cartProductsServiceSide.filter(child => child.id !== product.id);
  }
}
