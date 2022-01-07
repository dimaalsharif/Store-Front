import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  firstname?:string
  lastname?:string
  username?:string
  password?:string
  usernameExists?:boolean
  createdUser?:User
  constructor(private userServices:UserService,private router: Router) { }

  ngOnInit(): void {
    this.password=''
    this.firstname=''
    this.lastname=''
    this.username=''
  }

  createUser(){
    this.createdUser={
      firstname:this.firstname!,
      lastname:this.lastname!,
      username:this.username!,
      password:this.password!
    }
    if(this.firstname==''||this.lastname==''||this.username==''){
      alert("Please fill all fields first")
      return
    }
    else {
      this.userServices.addUser(this.createdUser!).subscribe(res => {
        
        localStorage.setItem('token',res.tokenId)
        alert("User Created Successfully")  
        const url='/'
        this.router.navigateByUrl(url)
     },
     err=>{
       alert("Username already exists")
     });
    }
}
}
