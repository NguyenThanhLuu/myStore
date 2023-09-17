import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductInfo } from 'src/app/interfaces/product-info.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input('product') product!: ProductInfo;
  @Input('label') label!: string;
  @Output() clickBtn = new EventEmitter();

  emitProduct(product: ProductInfo) {
    this.clickBtn.emit(product);
  }
}
