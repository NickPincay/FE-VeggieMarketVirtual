import { Component, OnInit } from '@angular/core';
import { IProductoCart } from 'src/app/modules/shared/interfaces/iproducto-cart';
import { CartService } from 'src/app/modules/shared/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  listProducts: IProductoCart[] = []

  constructor(
    private _cartProducts: CartService
  ) { }

  ngOnInit() {
    this._cartProducts.products.subscribe(
      products => {
        this.listProducts = products
      }
    )
  }

}
