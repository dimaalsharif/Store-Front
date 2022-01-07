import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CartItem } from '../CartItem';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }
  AddToCart(cart:CartItem): Observable<any> {
    return this.http.post('http://localhost:3000/cart',cart);
  }

}
