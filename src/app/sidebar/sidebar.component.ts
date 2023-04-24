import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { RegistrationService } from '../service/registration.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  userdata:any
  UserName:any

  constructor(private service:RegistrationService,private router:Router) { }

  ngOnInit():void {
    this.UserName= localStorage.getItem('name').split(' ')[0]
    console.log(this.UserName)
    
  }
  
  // userlist(){
  //  this.userdata = {
  //    "id": localStorage.getItem('id')
  //  }
  //   this.service.getUserlist1(this.userdata).subscribe(res=>{
  //   })
  // }
  
  

  getDetails(){    
    this.router.navigate(['user/userlist'])
  }

  ApplyLoan(){
    this.router.navigate(['user/loanDetails'])
  }

  loanList(){
    this.router.navigate(['user/loanList'])
  }

  


}
  
  

