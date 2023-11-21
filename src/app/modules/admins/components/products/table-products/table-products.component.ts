import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IProductoLocal } from 'src/app/modules/shared/interfaces/iproducto-local';
import { ProductoLocalService } from 'src/app/modules/shared/services/producto-local.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddEditProductsComponent } from '../add-edit-products/add-edit-products.component';
import { InfoProductsComponent } from '../info-products/info-products.component';

@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html',
  styleUrls: ['./table-products.component.css']
})
export class TableProductsComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'categoria', 'precio', 'cantidad', 'accion'];
  dataSource = new MatTableDataSource<IProductoLocal>();
  id: number = 0

  constructor(
    private _productosService: ProductoLocalService,
    public dialog: MatDialog,
    private _alert: AlertService
  ) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('staticBackdrop') modal!: ElementRef;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    if (this.dataSource.data.length > 0) {
      this.paginator._intl.itemsPerPageLabel = "Items por Página ";
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit() {
    this.getProducts();
  }

  private handleDialogClose(messageType: string): void {
    if (messageType === 'success') {
      this.getProducts()
      this._alert.success("Operación completada con éxito");
    } else if (messageType === 'error') {
      this._alert.error("Error en la operación");
    }
  }

  getProducts() {
    this.dataSource.data = this._productosService.getAllProductosAdmins()
  }

  openAdd() {
    this.dialog.open(AddEditProductsComponent, {
      autoFocus: false,
      disableClose: true,
      width: '60%',
    }).afterClosed().subscribe(
      (result: string) => {
        this.handleDialogClose(result);
      });
  }

  openEdit(product: IProductoLocal) {
    this.dialog.open(AddEditProductsComponent, {
      autoFocus: false,
      disableClose: true,
      width: '60%',
      data: product
    }).afterClosed().subscribe(
      (result: string) => {
        this.handleDialogClose(result);
      });
  }

  openInfo(product: IProductoLocal) {
    this.dialog.open(InfoProductsComponent, {
      autoFocus: false,
      width: 'auto',
      data: product
    })
  }

  delete() {
    const result = this._productosService.deleteProducto(this.id);
    this.closeDialog(result ? 'success' : 'error');
  }

  cancel() {
    this.closeDialog();
  }

  recuperarId(newId: number) {
    this.openDialog();
    this.id = newId;
  }

  private closeDialog(messageType?: string) {
    this.modal.nativeElement.classList.remove('show');
    this.modal.nativeElement.style.display = 'none';
    if (messageType) {
      this.handleDialogClose(messageType);
    }
  }

  private openDialog() {
    this.modal.nativeElement.classList.add('show');
    this.modal.nativeElement.style.display = 'block';
  }

}
