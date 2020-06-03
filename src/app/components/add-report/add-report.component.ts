import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Report } from "../../models/Report";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-add-report",
  templateUrl: "./add-report.component.html",
  styleUrls: ["./add-report.component.css"]
})
export class AddReportComponent implements OnInit {
  reportDate:string = "";
  reportUsername:string = "";
  reportContent:string = "";
  reportIsApproved:boolean = false;
  reportModel = new Report(this.reportDate, this.reportUsername, this.reportContent, this.reportIsApproved);

  constructor (
    private route: ActivatedRoute
  ) { }

  updateDate (value: string) {
    this.reportDate = new Date(value).toLocaleString();
  }

  updateUsername (value: string) {
    this.reportUsername = value;
  }

  updateContent (value: string) {
    console.log(value.toString());
    this.reportContent = value;
  }

  submitReport (f: NgForm) {
    if (!this.reportModel.date) {
      alert("Invalid/Missing Date");
    } else if (!this.reportModel.username) {
      alert("Username field cannot be empty");
    } else {
      const allReports = JSON.parse(localStorage.getItem("reports"));
      allReports.push(this.reportModel);
      localStorage.setItem("reports", JSON.stringify(allReports));
      window.location.href = "/view-reports";
    }
  }

  ngOnInit () {
  }
}
