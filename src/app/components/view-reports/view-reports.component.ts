import { Component, OnInit } from '@angular/core';
import { Report } from '../../models/Report'
import { REPORTS } from  '../../models/Reports'

@Component({
  selector: 'app-view-reports',
  templateUrl: './view-reports.component.html',
  styleUrls: ['./view-reports.component.css']
})
export class ViewReportsComponent implements OnInit {
  reports = REPORTS;

  constructor() { }

  ngOnInit() {
  }

}
