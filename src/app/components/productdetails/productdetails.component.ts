import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetProductsService } from 'src/app/services/get-products.service';
import { Product } from 'src/app/Product';
import { CartItem } from 'src/app/CartItem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {
  pid?:number
  productObj?:Product
  productQuantity?:number
  cart:CartItem[]=JSON.parse(localStorage.getItem("cart")!)?JSON.parse(localStorage.getItem("cart")!):[]
  
  constructor(private route:ActivatedRoute,private getProductService:GetProductsService,private router:Router) { }

  ngOnInit(): void {
    this.pid = this.route.snapshot.params['id'];
     this.getProductService.getProductById(this.pid!).subscribe(data => {
       this.productObj=data
       console.log(this.productObj)
    });
    this.productQuantity=1;
  }

  addItem(){
    const pid=this.productObj!.id
    if(this.cart.length==0) this.cart.push({pid:pid,quantity:this.productQuantity!})
    else{
      if(this.cart.filter(e=>e.pid==pid).length==0) this.cart.push({pid:pid,quantity:this.productQuantity!})
    else {
      this.cart=this.cart.filter(e=>e.pid==pid?e.quantity=this.productQuantity!:e.quantity)
    }}
    localStorage.setItem("cart",JSON.stringify(this.cart))
    console.log(this.cart)
    this.productQuantity=1
  }

  backToProducts(){
    this.router.navigateByUrl('')
  }

}
