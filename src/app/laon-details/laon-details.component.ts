import { Component, OnInit,Output } from '@angular/core';
import { RegistrationService } from '../service/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-laon-details',
  templateUrl: './laon-details.component.html',
  styleUrls: ['./laon-details.component.css']
})
export class LaonDetailsComponent implements OnInit {

  users:any
  data1:any
  constructor(private service: RegistrationService, private router:Router) { 
    this.getLoanDetails()
  }

  ngOnInit():void {
    this.data1
   
  }
  
  //get All loan details
  getLoanDetails(){
    this.service.getLoanDetail().subscribe(res=>{
      
      this.users = res.Data
      // if(res.Errorcode === 200)
    //  {
       
    //  }
    //  else{
    //    alert(`something went's wroung`)
    //  }
   })
  }

  applyLoan(data){
    this.data1 = data
    this.router.navigate(['user/loanCalculation',data.id])
    
  } 

  




}
