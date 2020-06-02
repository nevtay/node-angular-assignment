import { Component, OnInit } from '@angular/core';
import { Report } from '../../models/Report'

@Component({
  selector: 'app-view-reports',
  templateUrl: './view-reports.component.html',
  styleUrls: ['./view-reports.component.css']
})
export class ViewReportsComponent implements OnInit {
  reports: Report[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
