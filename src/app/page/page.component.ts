import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../service/registration.service';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';

import { userData } from './user';
import  Swal  from 'sweetalert2'

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  user:any
  FormValue:FormGroup
  userDataModel : userData = new userData();
  userId:any
  Data:any
  constructor(private service:RegistrationService, private formbuilder:FormBuilder ) { }

  ngOnInit() {
    this.getUserData()

    this.FormValue = new FormGroup ({
      firstname: new FormControl('',[Validators.required]),
      lastname: new FormControl('',[Validators.required]),
      mobileno:new FormControl({value:'',disabled: true},[Validators.required]),
      gender:new FormControl('',[Validators.required]),

      
    })
  }

  getUserData(){
    
    this.service.registration().subscribe((res)=>{
        this.user = res.GetAllUsers
        this.userId = res.GetAllUsers.id
    })

  }

  
  //sweet alert for update data  
  updateSweetAlert(){
    Swal.fire(
      'Good job!',
      'Your data is Uptodate!',
      'success'
      )
    }
 
  editdata(row:any){
    this.FormValue.controls['firstname'].setValue(row.firstname)
    this.FormValue.controls['lastname'].setValue(row.lastname)
    this.FormValue.controls['mobileno'].setValue(row.mobileno)
    this.FormValue.controls['gender'].setValue(row.gender)
  }
 
  updateUserDetails(){
    // this.userDataModel.firstname = this.FormValue.value.firstname
    // this.userDataModel.lastname = this.FormValue.value.lastname
    // this.userDataModel.gender = this.FormValue.value.gender
    
    this.service.updateUser(this.FormValue.value,this.userId)
    .subscribe(res=>{
      this.FormValue.reset();
      if(res.ErrorCode==200)
      {
        Swal.fire({
          title:'updated successfully',
          icon:'success'
        })
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
      }
      this.getUserData()
      })
    }


  
    

  
  
}
