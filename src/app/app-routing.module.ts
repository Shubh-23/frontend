import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaonDetailsComponent } from './laon-details/laon-details.component';
import { ListEMIComponent } from './list-emi/list-emi.component';
import { LoanCalcualationComponent } from './loan-calcualation/loan-calcualation.component';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { ShowUserLoanComponent } from './show-user-loan/show-user-loan.component';
import { UserComponent } from './user/user.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'user/userlist',component:UserlistComponent},
  {path:'user',component:UserComponent},
  {path:'registeration',component:RegisterationComponent},
  {path:'user/loanDetails',component:LaonDetailsComponent},
  {path:'user/loanCalculation',component:LoanCalcualationComponent},
  {path:'user/loanCalculation/:id',component:LoanCalcualationComponent},
  {path:'user/listOfEMI',component:ListEMIComponent},
  {path:'user/loanList',component:ShowUserLoanComponent}

  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
