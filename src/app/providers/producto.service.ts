import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProveedorProductoService {
  private URL: string = 'http://localhost:3000/rest/producto/findAll/json';

  getResponse() {
    return this.http.get(this.URL);
}
  constructor(private http:HttpClient) { }

}
