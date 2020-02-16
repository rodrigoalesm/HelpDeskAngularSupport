import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  isLoggedIn: Boolean = false;
  private subject = new Subject<Boolean>();

  constructor() { }

  onSessionChange(): Observable<Boolean> {
    return this.subject.asObservable()
  }

  login(){
    this.subject.next(true);
  }
  logout(){
    this.subject.next(false);
  }
}