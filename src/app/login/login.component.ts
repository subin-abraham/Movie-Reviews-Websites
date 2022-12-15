import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServicesService } from '../services/data-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // userName:any
  // password:any

  constructor(private router:Router,private data:DataServicesService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  userLoginDetails = this.formBuilder.group({
    userName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9\._*]+')]]
  })


  login(){

    var userName = this.userLoginDetails.value.userName
    var password = this.userLoginDetails.value.password
    if(this.userLoginDetails.valid){
      const result = this.data.login(userName, password)
      if (result) {
        alert('login success')
        this.router.navigateByUrl('home')
      }
  
    }
    else{
      alert("Invalid Form")
    }

  



    // var userName= this.userName
    // var password= this.password
    // const result = this.data.login(userName,password)
    // if(result){
    //   alert('login Success')
    //   this.router.navigateByUrl('home')
  

    // }
    // else{
    //   alert('invalid')
    // }
  }

}
