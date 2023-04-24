import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../service/registration.service';

@Component({
  selector: 'app-list-emi',
  templateUrl: './list-emi.component.html',
  styleUrls: ['./list-emi.component.css']
})
export class ListEMIComponent implements OnInit {
  userList:any
  MOI2:any
  year:any=localStorage.getItem('year')
  TotalAmount:any
  amount:any
  status:boolean=false
  currentPage=1
  
  
  constructor(private service:RegistrationService) { }

  ngOnInit() {
    this.MOI2 = (100/(parseInt(this.year) * 12)).toFixed(2)
    this.service.listEmi().subscribe(res=>{      
      this.MOI2 = (100/(parseInt(this.year) * 12)).toFixed(2)
      this.userList = res.Data.emiDetails
      this.amount = res.Data.loan_amount
      this.TotalAmount = res.Data.Total_amount
      this.newArrdata(this.userList);
    
    })
  }
  newArr:any=[];
  newArrdata(data)
  {
    let num = 0
    let i = 0
    let Amount = this.amount

  data.forEach(element => {
    i+=1
    num = num + parseInt(element.SIP)
    Amount = (Amount - ((element.SIP)/100) * (this.MOI2 * i )).toFixed(2)

    //this.amount = ((this.amount - (element.SIP)/100) * (this.MOI2 * i )).toFixed(2)
    let a={
      "Pay_date":element.Pay_date,
      "SIP":element.SIP,
      "MOI":(this.MOI2 * i ).toFixed(2),
      "loanAmount":this.TotalAmount - num,
      "RAmount":Amount 
    }
    this.newArr.push(a)
  }); 
  }

  
  editUserdata(data){
    console.log(data.SIP)
  }

}
