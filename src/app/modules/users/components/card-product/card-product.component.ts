import { Component, Input } from '@angular/core';
import { IProductoLocal } from 'src/app/modules/shared/interfaces/iproducto-local';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})

export class CardProductComponent {

  @Input() productsLocal: IProductoLocal[] = []

  maxQuantity: number = 10
  currentQuantity: number = 1
  totalCards: number = 0


  increaseQuantity() {
    if (this.currentQuantity < this.maxQuantity) {
      this.currentQuantity++
    }
  }

  decreaseQuantity() {
    if (this.currentQuantity > 1) {
      this.currentQuantity--
    }
  }

}
