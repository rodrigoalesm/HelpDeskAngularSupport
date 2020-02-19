import { UserService } from '../services/user.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent{
 
  userForm: FormGroup;
  title: string= "Create";
  id:number;
  errorMessage: any;
  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
    private _userService: UserService, private _router: Router) { 
    if (this._avRoute.snapshot.params["id"]) {
      this.id = this._avRoute.snapshot.params["id"];
    }
    this.userForm= this._fb.group({
      name: ['', [Validators.required]],
      secondLastName: ['', [Validators.required]],
      firstLastName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      secondContact: ['', [Validators.required]],
      userRole: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
   
    save(){
      if (!this.userForm.valid) {
        return;
      }
      if (this.title == "Create") {
        this._userService.saveUser(this.userForm.value)
          .subscribe((data) => {
            //this._router.navigate(['/fetch-employee']);
            
          }, error => this.errorMessage = error)
      } 
    }
  

}