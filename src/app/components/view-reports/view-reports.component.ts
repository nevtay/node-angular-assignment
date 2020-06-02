import { Component, OnInit, Input } from '@angular/core';
import { Report } from '../../models/Report'
import { REPORTS } from  '../../models/Reports'

@Component({
  selector: 'app-view-reports',
  templateUrl: './view-reports.component.html',
  styleUrls: ['./view-reports.component.css']
})
export class ViewReportsComponent implements OnInit {
  @Input() report: Report;
  
  reports = REPORTS;
  selectedReport: Report;

  isReadOnly:boolean = true;

  constructor() { }
  
  ngOnInit() {
  }
  
  toggleReportEditing() {
    this.isReadOnly = !this.isReadOnly;
  }

  onSelect(report: Report): void {
    this.selectedReport = report;
  }
  
}
