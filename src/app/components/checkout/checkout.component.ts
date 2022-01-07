import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/CartItem';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  constructor() { }
  cart:CartItem[]=JSON.parse(localStorage.getItem("cart")!)?JSON.parse(localStorage.getItem("cart")!):[]
  ngOnInit(): void {
    console.log("cart from checkout ",this.cart)
  }

}
