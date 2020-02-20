import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomMaterialModule } from './_modules/material.module';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { IssueListComponent } from './issuelist/issuelist.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CreateUserComponent } from './create-user/create-user.component';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { SupportListComponent } from './support-list/support-list.component';

import { BasicAuthInterceptor } from './helpers/basic-auth.interceptors';
import { ErrorInterceptor } from './helpers/error.interceptors';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    IssueListComponent,
    CreateUserComponent,
    SupervisorComponent,
    SupportListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'issue-list', component: IssueListComponent },
      { path: 'supervisor', component: SupervisorComponent },
      { path: 'support-list', component: SupportListComponent },
      { path: '', component: CreateUserComponent},
    ])
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
