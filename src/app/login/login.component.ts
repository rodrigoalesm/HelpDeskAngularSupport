import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';

//lol

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.min(4)])
  loginForm: FormGroup;

  constructor(private router: Router,
    public formBuilder:FormBuilder,
    private sessionService: SessionService) {}

  ngOnInit() {
    this.reactiveForm();
  }

  reactiveForm(){
    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password
    })
  }

  login(){
    if(!this.loginForm.valid){
      return;      
    }
    this.sessionService.isLoggedIn = true;
    this.router.navigate(['home']);
    this.sessionService.login();

  }

  getErrorMessage(){
    return this.email.hasError('required') ? 'Email is required' :
      this.email.hasError('email') ? 'Email not valid' : '';
  }

}
