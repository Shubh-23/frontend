import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../service/registration.service';

@Component({
  selector: 'app-show-user-loan',
  templateUrl: './show-user-loan.component.html',
  styleUrls: ['./show-user-loan.component.css']
})
export class ShowUserLoanComponent implements OnInit {

  constructor(private service:RegistrationService,private router:Router) { }

  ngOnInit() {

    this.service.showloanlist().subscribe(res=>{
      console.log(res)
    })

  }



}
