import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import { ConfirmInfo } from '../interfaces/confirm-info.model';
import { ProductInfo } from '../interfaces/product-info.model';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  formInfo$ = new BehaviorSubject<ConfirmInfo>({
    address: '',
    creditCartNumber: 0,
    fullName: '',
    totalPrice: 0
  });
  formInfoObs = this.formInfo$.asObservable();

  constructor(private productsService: ProductsService) { }

  addToCart(product: ProductInfo): void {
    if (!product.isAddedToCart) {
      product.isAddedToCart = true;
      this.productsService.addProductToCart(product);
      alert('Added product to cart successfully');
      return;
    }
  }

  getFormInfo(formInfo: ConfirmInfo): void {
    this.formInfo$.next(formInfo);
  }
}
