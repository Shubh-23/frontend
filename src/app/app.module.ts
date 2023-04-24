import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { UserlistComponent } from './userlist/userlist.component';
import { LaonDetailsComponent } from './laon-details/laon-details.component';
import { LoanCalcualationComponent } from './loan-calcualation/loan-calcualation.component';
import { ListEMIComponent } from './list-emi/list-emi.component';
import { ShowUserLoanComponent } from './show-user-loan/show-user-loan.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PageComponent } from './page/page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterationComponent,
    UserComponent,
    SidebarComponent,
    HeaderComponent,
    UserlistComponent,
    LaonDetailsComponent,
    LoanCalcualationComponent,
    ListEMIComponent,
    ShowUserLoanComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
