import { Component, OnInit, Input } from "@angular/core";
import { Report } from "../../models/Report";

@Component({
  selector: "app-report-detail",
  templateUrl: "./report-detail.component.html",
  styleUrls: ["./report-detail.component.css"]
})
export class ReportDetailComponent implements OnInit {
  isReadOnly:boolean = true;

  @Input() report: Report;

  constructor () { }

  ngOnInit () {
  }

  toggleReportEditing () {
    this.isReadOnly = !this.isReadOnly;
  }
}
