import { Injectable, Inject } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable , of} from 'rxjs';


Injectable()
export class UserService{
myAppUrl: string="";

constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl;

}

saveUser(user){
return this._http.post('http://localhost:44371/api/users/', user).pipe(map((res: any) => {
    console.log('res', res)
    return res;
  }));
}
errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error)
    }
}