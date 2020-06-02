import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Report } from '../../models/Report'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.css']
})
export class AddReportComponent implements OnInit {
  reportDate:string = ''
  reportUsername:string = ''
  reportContent:string = ''
  reportIsApproved:boolean = false
  reportModel = new Report(this.reportDate, this.reportUsername, this.reportContent, this.reportIsApproved)

  constructor(
    private route: ActivatedRoute
  ) { }

  updateDate(value: string) {
    this.reportDate = value
  }

  updateUsername(value: string) {
    this.reportUsername = value
  }

  updateContent(value: string) {
    this.reportContent = value
  }

  submitReport(f: NgForm) {
    console.log(this.reportModel)
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.reportDate = params['reportDate'];
      this.reportUsername = params['reportUsername'];
      this.reportContent = params['reportContent'];
      this.reportIsApproved = params['reportIsApproved'];
    });
  }

}
