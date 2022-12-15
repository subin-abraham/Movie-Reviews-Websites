import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServicesService } from '../services/data-services.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private data: DataServicesService, private router: Router, private formbuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  registerForm = this.formbuilder.group({
    userName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]]
  })

  register() {
    var userName = this.registerForm.value.userName
    var password = this.registerForm.value.password

    if (this.registerForm.valid) {
      const result = this.data.register(userName, password)

      if (result) {
        alert('Sucess')
        this.router.navigateByUrl('')

      }
      else {
        alert('user already exist')


      }

    }
    else {
      alert("form is invalid")
    }


  }


}
