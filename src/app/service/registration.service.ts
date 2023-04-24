import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  baseUrl = "http://localhost:8081"
  constructor(private http:HttpClient) { }

  //login
  loginData(data){
    return this.http.post<any>(`${this.baseUrl}/user/login`,data)
    
  }

  RegisterUserData(data){
    console.log(data)
    return this.http.post<any>(`${this.baseUrl}/user/registration`,data)
  }


  // getUserlist1(userdata:any){
  //   return this.http.post<any>(`${this.baseUrl}/user/getLoanDetails`,userdata)
  // }

  //insert Details of user
  insertAllDetails(data:any){
  
    return this.http.post<any>(`${this.baseUrl}/user/SubmitAllDetails`,data)
  }

  
  getuserLoanDetails(data){
    return this.http.post<any>(`${this.baseUrl}/user/getLoanDetails`,data)
    .pipe(map((res:any)=>{
      return res
    }))
  }

  getLoanDetail(){
    return this.http.get<any>(`${this.baseUrl}/user/InterestList`)
    .pipe(map((res:any)=>{
      return res
      
    }))
  }

 //InsertAllDetailsOfUser
  getInterestData(id:any){
    return this.http.get<any>(`${this.baseUrl}/user/InterestListId/${id}`)
    .pipe(map((res:any)=>{
      console.log(res)
      return res
    }))
  }


  ApplyForLoan(data:any){
    return this.http.post<any>(`${this.baseUrl}/user/loanDetails`,data)
  }

  //ALL EMI Details
  listEmi(){
    let id = localStorage.getItem('id')
    return this.http.get<any>(`${this.baseUrl}/user/GetAllDetailsEmi/${id}`)
    .pipe(map((res:any)=>{
      return res
    }))
  }

  showloanlist(){
    return this.http.get<any>(`${this.baseUrl}/user/GetAllDetailsEmi`)
  }



  //get API of registration
  registration(){
    return this.http.get<any>('/User/GetAllUsers')
    .pipe(map((res:any)=>{
      return res
    }))
  }

  //user Update API
  updateUser(data:any,userId:any){
    console.log(data)

    return this.http.post<any>('/User/GetAllUsers',data)
  }

    




}
  
    

    
    







