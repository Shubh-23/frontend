import { Component, OnInit,Input, Type } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { RegistrationService } from '../service/registration.service';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-loan-calcualation',
  templateUrl: './loan-calcualation.component.html',
  styleUrls: ['./loan-calcualation.component.css']
})
export class LoanCalcualationComponent implements OnInit {
  @Input() data1
  topicId:any
  data2:any
  rate:any
  SI:any
  TotalAmount:any
  Year:any
  SIP1:any
  Amount:any
  showAdd:boolean=false
  constructor(private route:ActivatedRoute,private service:RegistrationService,private router1:Router) { 
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.topicId=  params.get('id');
      this.InterestData(params.get('id'))
      
        
          });
        }
        
    
  InterestData(id:any){
    this.service.getInterestData(id).subscribe((res:any)=>{
      this.data2 = res.Data.loan_type
      this.rate = res.Data.interest_rate
   
    })
  }
  
  onClickSubmit(result) {
    this.showAdd = true
    this.Amount = result.amount
    this.SI = ((parseInt(result.amount) * this.rate * parseInt(result.year))/100).toFixed(2)
    this.TotalAmount = parseInt(result.amount) + parseInt(this.SI)
    this.Year = parseInt(result.year) 
    this.SIP1 = (this.TotalAmount/(this.Year * 12)).toFixed(2)
    localStorage.setItem('year',this.Year)
    
  }

  ApplyLoan(){
    let data = {
      'userId':localStorage.getItem('id'),
      'loanAmount':this.Amount,
      'TotalAmount':this.TotalAmount,
      'loanType':this.data2,
      'year':this.Year,
      'loanEmi':this.SIP1,
      'ROI':this.rate
    }
    this.service.ApplyForLoan(data).subscribe((res:any)=>{
      if(res.ErrorCode === 200 ){
        this.router1.navigate(['user/listOfEMI'])
      }
    })



  }
}
  

    
    
    
  
  
  




