import { Component } from '@angular/core';
import { Producto} from '../../interfaces/producto';
import { ProveedorProductoService} from '../../providers/producto.service';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
interface Column {
  name: string;
  label: string;
}
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent {
  
public data1: Producto[] = [];
public data2: Producto[] = [];
displayedColumns: string[] = ["ID","NombreProducto","Descripcion","Precio", "Categoria"];
constructor(private dataProvider: ProveedorProductoService) {}
toppings = new FormControl('');
toppingList: string[] = ["ID","NombreProducto","Descripcion","Precio", "Categoria"];
dataSource = this.data2;

ngOnInit() {
  this.dataProvider.getResponse().subscribe((response) => {
    this.data1 = (response as Producto[]);
    this.data2 = (response as Producto[]);
  });

}
onProductSelected(event: any) {
  const selectedProductName = event.value;
  this.dataProvider.getResponse().subscribe((response) => {
    this.data2 = (response as Producto[]).filter((element) => {
      return element.Categoria=== selectedProductName;
    }); 
  });

}
uniqueCategories() {
  const uniqueSet = new Set<string>();
  this.data1.forEach((producto) => {
    uniqueSet.add(producto.Categoria);
  });
  return Array.from(uniqueSet);
}

}
