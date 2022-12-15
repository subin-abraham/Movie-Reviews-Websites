import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {
  // User Name & Password
  userDetails:any={
    "subin":{userName:"subin",password:1234},
    "subin1":{userName:"subin1",password:1234},
    "subin2":{userName:"subin2",password:1234}
  }

  constructor() { }

  register(userName:any,password:any){
    var userDetails=this.userDetails
    if(userName in userDetails){
      return false
    }
    else{
      userDetails[userName]={userName,password}
      return true
    }
  }

  login(userName:any,password:any){
    var userDetails=this.userDetails

    if(userName in userDetails){
      if(password == userDetails[userName]['password']){
        return true
      }
      else{
        alert('Incorrect Password')
        return false
      }
    }
    else{
      alert('Incorrect User Name')
      return false
    }
  
  }
}

