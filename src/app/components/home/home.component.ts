import { Component, OnInit } from '@angular/core';
import { GetProductsService } from 'src/app/services/get-products.service';
import { Product } from 'src/app/Product';
import { CartItem } from 'src/app/CartItem';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/User';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    showFiller = false;
    products:Product[]=[]
    productQuantity?:number
    cart:CartItem[]=JSON.parse(localStorage.getItem("cart")!)?JSON.parse(localStorage.getItem("cart")!):[]
    authUserInfo?:any
  constructor(private getProductService:GetProductsService,private router: Router, private userServices:UserService) { }

  ngOnInit(): void {
    this.getProductService.getAllProducts().subscribe(data => {
      this.products=data
    });
    this.productQuantity=1
    this.authUserInfo=this.userServices.getUserInfo()
    console.log(" this.authUserInfo", this.authUserInfo)
  }

  addItem(pid:number){
    if(this.cart.length==0) this.cart.push({pid:pid,quantity:this.productQuantity!})
    else{
      if(this.cart.filter(e=>e.pid==pid).length==0) this.cart.push({pid:pid,quantity:this.productQuantity!})
    else {
      this.cart=this.cart.filter(e=>e.pid==pid?e.quantity=this.productQuantity!:e.quantity)
    }
    }
    localStorage.setItem("cart",JSON.stringify(this.cart))
    console.log(this.cart)
    this.productQuantity=1
  }

  removeItem(pid:number){
    this.cart=this.cart.filter(e=>e.pid!==pid)
    localStorage.setItem("cart",JSON.stringify(this.cart))
  }


  goToDetails(pid:number){
    const url=`/details/${pid}`
    this.router.navigateByUrl(url)
  }

  navtocheckout(){
    this.router.navigateByUrl("/checkout")

  }




}
