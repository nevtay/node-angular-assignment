import { Component, OnInit } from '@angular/core';
import { Report } from '../../models/Report'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.css']
})
export class AddReportComponent implements OnInit {
  reportDate:string = ''
  reportAuthor:string = ''
  reportContent:string = ''
  reportModel = new Report(this.reportDate, this.reportAuthor, this.reportContent)

  constructor() { }

  updateDate(value: string) {
    this.reportDate = value
  }

  updateUsername(value: string) {
    this.reportAuthor = value
  }

  updateContent(value: string) {
    this.reportContent = value
  }

  submitReport(f: NgForm) {
    console.log(this.reportModel)
  }

  ngOnInit() {
  }

}
