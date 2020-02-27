import { UserService } from '../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  userForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  title: string = "Create";
  id: number;
  error: '';
  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
    private _userService: UserService, private _router: Router) { }

  ngOnInit() {
    this.userForm = this._fb.group({
      username: ['', [Validators.required]],
      secondname: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      secondcontact: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

  }

  onSubmit() {
    if (!this.userForm.valid) {
      return;
    }
    this._userService.saveUser(this.userForm.value)
      .subscribe((data) => {
        this._router.navigate(['/fetch-employee']);
      }, error => this.error = error)
  }
}