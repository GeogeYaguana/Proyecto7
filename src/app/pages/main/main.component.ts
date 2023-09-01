import { Component } from '@angular/core';
import { Producto} from '../../interfaces/producto';
import { ProveedorProductoService} from '../../providers/producto.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
 
  public data1: Producto[] = [];
  constructor(private dataProvider: ProveedorProductoService) {}
 
  
  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => {
      this.data1 = (response as Producto[]);
    });
  
  }
 

}
