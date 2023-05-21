import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../service/registration.service';
import { User } from './user';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  user = new User()
  constructor(private router:Router,private service:RegistrationService) { }

  ngOnInit() {
  }
  getLogin(){
    this.router.navigate([''])
  }

  RegisterUser(){
    console.log(this.user);
    
    // console.log(data)
    this.service.RegisterUserData(this.user).subscribe(res=>{
      // console.log();
      
    })
  }

}
