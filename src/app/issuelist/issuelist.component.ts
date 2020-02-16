import { Component, Inject, ErrorHandler, ViewChild, OnInit } from '@angular/core';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { IssueService } from '../services/issue.service'
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';



@Component({
  selector: 'issuelist-component',
  templateUrl: './issuelist.component.html'
})


export class IssueListComponent {
  

  public issueList: IssueData[];

  dataSource: MatTableDataSource<IssueData>;

  constructor(public http: HttpClient, private _router: Router, private _issueService: IssueService) {
    this.getIssues();
  }

  ngOnInit() {
  }

  getIssues() {
    this._issueService.getIssuesList().subscribe(
      data => this.issueList = data
    )
  }

  delete(id) {
    var answer = confirm("Are you sure you want to delete this issue?");

    if (answer) {
      this._issueService.deleteIssue(id).subscribe((data) => {
        this.getIssues();
      }, error => console.error(error))
    }
  }
}

interface IssueData {
    Id: number;
    Description: string;
    Time_Stamp: Date;
    Contact_Email: string;
    Classification: string;
    Service_Type: string;
    Status: string;
    Second_Name: string;
    First_Name: string;
}

