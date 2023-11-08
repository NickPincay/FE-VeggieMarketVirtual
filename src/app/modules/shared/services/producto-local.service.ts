import { Injectable } from '@angular/core';
import { IProductoLocal } from '../interfaces/iproducto-local';
import { productsLocalData } from '../data/data-producto-local';

@Injectable({
  providedIn: 'root'
})
export class ProductoLocalService {

  constructor() { }

  getAllProductos(): IProductoLocal[] {
    return productsLocalData;
  }

  getProductoById(id: number): IProductoLocal | undefined {
    return productsLocalData.find((producto) => producto.id === id);
  }

  addProducto(producto: IProductoLocal) {
    productsLocalData.push(producto)
  }

  updateProducto(producto: IProductoLocal) {
    const index = productsLocalData.findIndex((p) => p.id === producto.id);
    productsLocalData[index] = producto;
  }

  deleteProducto(id: number): void {
    const index = productsLocalData.findIndex((producto) => producto.id === id);
    productsLocalData.splice(index, 1);
  }

}
