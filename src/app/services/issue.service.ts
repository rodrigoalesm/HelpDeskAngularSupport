import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Issue } from '../model/issue.model'

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  private baseUrl = 'http://localhost:44371/api/issue/';

  constructor(private http: HttpClient) { }

  getIssue(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}${id}`);
  }

  createIssue(issue: Issue): Observable<any> {
    return this.http.post(`${this.baseUrl}`, issue);
  }

  updateIssue(id: number, issue: Issue): Observable<any> {
    return this.http.put(`${this.baseUrl}${id}`, issue);
  }

  deleteIssue(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}${id}`, { responseType: 'text' });
  }

  getIssuesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
