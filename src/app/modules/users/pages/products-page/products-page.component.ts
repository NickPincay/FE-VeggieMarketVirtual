import { Component, OnInit } from '@angular/core';
import { categorias } from 'src/app/modules/shared/data/data-producto-local';
import { ICategoria, IProductoLocal } from 'src/app/modules/shared/interfaces/iproducto-local';
import { ProductoLocalService } from 'src/app/modules/shared/services/producto-local.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})

export class ProductsPageComponent implements OnInit {

  categories: ICategoria[] = categorias
  rangeValue: number = 0;
  lisProduct: IProductoLocal[] = [];

  constructor(private _productosServices: ProductoLocalService) { }

  ngOnInit() {
    this.lisProduct = this._productosServices.getAllProductos()
  }

  onRangeChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.rangeValue = parseInt(inputElement.value, 10);
  }

}
