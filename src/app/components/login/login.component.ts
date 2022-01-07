import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import {UserLogin} from '../../UserLogin'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username?:string
  password?:string
  userInfoLogin?:UserLogin
  constructor(private userServices:UserService,private router: Router) { }

  ngOnInit(): void {
    this.password=''
    this.username=''
  }

  login(){
    // this.userInfoLogin={
    //   username:this.username!,
    //   password:this.password!
    // }
    // if(this.username==''||this.username==undefined){
    //   alert("Please fill username first")
    //   return;
    // }
    // else if(this.username!==''||this.username!==undefined){
    //   this.userServices.checkUsernameSignUp(this.username!).subscribe(data => {
    //       if(!data) {
    //         alert("Username Doesn't Exist, Please Sign Up.") 
    //         const url='/signup'
    //         this.router.navigateByUrl(url)
    //       }
    //       else {
    //         this.userServices.authenticateUser(this.userInfoLogin!).subscribe(data => {
    //         if(data=="invalid authenticate") {
    //           alert("Incorrect password, please try again")
    //           this.password=''
    //           return
    //       }
    //       else {
    //           localStorage.setItem('authUserInfo',JSON.stringify(data.userInfo))
    //           localStorage.setItem('token',data.tokenId)
    //           console.log(data.userInfo)
    //           console.log(data.tokenId)
    //           this.router.navigateByUrl('/home')
    //       }
    //      });
    //     }
    //    });
    // }
  }

}
