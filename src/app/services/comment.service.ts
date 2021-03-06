import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comment} from '../model/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private baseUrl = 'http://localhost:44371/api/comment/'

  constructor(private http:HttpClient) { }

  getComment(id:number): Observable<any>{
    return this.http.get(`${this.baseUrl}${id}`);
  }

  createComment(comment:Comment): Observable<any>{
    return this.http.post(`${this.baseUrl}`, comment);
  }

  updateComment(id:number, comment:Comment):Observable<any>{
    return this.http.put(`${this.baseUrl}${id}`, comment);
  }

  deleteComment(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}${id}`, {responseType: 'text'});
  }

  getCommentsList():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
}
