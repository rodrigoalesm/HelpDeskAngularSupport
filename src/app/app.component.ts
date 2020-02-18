import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from './services/session.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Help Desk - Support';

  isLoggedIn: Boolean = false;//TODO make it false
  subscription: Subscription;

  constructor(private router: Router,
    private sessionService: SessionService) { }

  ngOnInit() {
    if (!this.isLoggedIn) {
      this.router.navigate(['login']);
    }
    this.sessionService.onSessionChange().subscribe(sessionChange => {
      this.isLoggedIn = sessionChange;
    })
  }
  logout(){
    this.sessionService.logout()
  }
}
