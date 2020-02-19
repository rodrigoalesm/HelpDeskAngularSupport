import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
import { IssueService } from '../services/issue.service'
import { Issue } from '../model/issue.model';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.css']
})
export class SupervisorComponent {

  public issueList: Issue[];

  dataSource: MatTableDataSource<Issue>;

  constructor(public http: HttpClient, private _router: Router, private _issueService: IssueService) { }

  ngOnInit() {
    this.getIssues();
  }

  getIssues() {
    this._issueService.getIssuesList().subscribe(
      data => this.issueList = data
    )
  }

}
