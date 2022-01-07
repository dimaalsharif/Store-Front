import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { SignupComponent } from './components/signup/signup.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo:'/home',pathMatch:'full' },
  { path: 'details/:id', component: ProductdetailsComponent },
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'checkout',component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
