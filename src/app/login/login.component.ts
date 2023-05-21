import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../service/registration.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User()
  msg:any
  constructor(private service:RegistrationService, private router:Router) { }

  ngOnInit() {
  }
  loginUser(){
    

    this.service.loginData(this.user).subscribe(res=>{
      console.log(res);
      
      if(res.ErrorCode == 200){
      localStorage.setItem('id',res.Data.id)
      localStorage.setItem('name',res.Data.name)
      this.router.navigate(['user/userlist'])
    }
    
    else{
      console.log('exception occured');
      this.msg='bad credentials,please enter valid emailId and password'
    }})
  }

  getRegistration(){
    this.router.navigate(['registeration'])
  }
  
  

  

}
