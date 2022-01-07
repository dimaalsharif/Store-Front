import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../Product';
@Injectable({
  providedIn: 'root'
})
export class GetProductsService {

  constructor(private http: HttpClient) { }
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }
  getProductById(id:number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:3000/products/${id}`);
  }
}
