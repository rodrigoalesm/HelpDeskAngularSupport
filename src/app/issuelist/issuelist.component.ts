import { Component, Inject, ErrorHandler } from '@angular/core';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { IssueService } from '../services/issue.service'



@Component({
  selector: 'issuelist-component',
  templateUrl: './issuelist.component.html'
})


export class IssueListComponent {

  public issueList: IssueData[];
  constructor(public http: HttpClient, private _router: Router, private _issueService: IssueService) {
    this.getIssues();
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
    IssueId: number;
    ClientId: number;
    Description: string;
    TimeStamp: Date;
    ContactPhone: string;
    contactEmail: string;
    Classification: string;
    Status: string;
    ServiceType: string;
    Name: string;
    SecondName: string;
    FirstName: string;
    Address: string;
    Phone: string;
    SecondContact: string;
    Email: string;
}

