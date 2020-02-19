import { Component, Inject, ErrorHandler, ViewChild, OnInit } from '@angular/core';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { CommentService } from '../../services/comment.service'
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';



@Component({
  selector: 'issuecomments-component',
  templateUrl: './issuecomments.component.html'
})


export class IssueCommentComponent {
  

  public commentList: commentData[];

  dataSource: MatTableDataSource<commentData>;

  constructor(public http: HttpClient, private _router: Router, private _commentService: CommentService) {
    this.getComments();
  }

  ngOnInit() {
  }

  getComments() {
    this._commentService.getCommentsList().subscribe(
      data => this.commentList = data
    )
  }

  delete(id) {
    var answer = confirm("Are you sure you want to delete this comment?");

    if (answer) {
      this._commentService.deleteComment(id).subscribe((data) => {
        this.getComments();
      }, error => console.error(error))
    }
  }
}

interface commentData {
    Id: number;
    IssueId: number;
    Name: string;
    Description: string;
    TimeStamp: Date;
}