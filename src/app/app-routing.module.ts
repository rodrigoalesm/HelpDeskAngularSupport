import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {SupervisorComponent} from './supervisor/supervisor.component';
import { SupportListComponent } from './support-list/support-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', component: HomeComponent},
  { path: 'supervisor', component: SupervisorComponent},
  { path: 'home', component: HomeComponent},
  { path: 'supervisor', component: SupervisorComponent},
  { path: 'support-list', component: SupportListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }