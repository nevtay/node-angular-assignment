import { Component, OnInit, Input } from "@angular/core";
import { Report } from "../../models/Report";

@Component({
  selector: "app-view-reports",
  templateUrl: "./view-reports.component.html",
  styleUrls: ["./view-reports.component.css"]
})
export class ViewReportsComponent implements OnInit {
  @Input() report: Report;
  reports = JSON.parse(localStorage.getItem("reports"));
  selectedReport: Report;

  constructor () { }

  ngOnInit () {
    // produce one mock report if there no actual reports - for demonstration only
    if (!JSON.parse(localStorage.getItem("reports"))) {
      localStorage.setItem("reports", JSON.stringify([{ username: "sampleuser", date: "2020-05-30", content: "sample report", isApproved: "false" }]));
    }
  }

  onSelect (report: Report): void {
    this.selectedReport = report;
  }

  clearAllReports () {
    localStorage.clear();
    window.location.reload();
  }
}
