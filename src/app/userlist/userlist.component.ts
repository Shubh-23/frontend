import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../service/registration.service';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  userDataModel : User = new User()
  FormValue:FormGroup
  listData:any
  currentPage:1
  
  
  constructor(private service:RegistrationService, private formbuilder:FormBuilder) { 
    
  }

  ngOnInit() {
    let data ={
      'id':localStorage.getItem('id')
    }
    this.service.getuserLoanDetails(data).subscribe(res=>{
      this.listData = res.Data
    })
    
  }
  getAllDetail(data){
    
    data ={
      "data":data,
      "userId":localStorage.getItem('id')
    }
    this.service.insertAllDetails(data).subscribe(res=>{
      
    })
  }

  
 
  

  



}
