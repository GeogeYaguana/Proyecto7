import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProveedorProductoService {
  private URL: string = '  https://rest-landing-production.up.railway.app/rest/producto/findAll/json';

  getResponse() {
    return this.http.get(this.URL);
}
  constructor(private http:HttpClient) { }

}
