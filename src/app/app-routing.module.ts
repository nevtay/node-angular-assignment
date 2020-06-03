import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { AddReportComponent } from "./components/add-report/add-report.component";
import { ViewReportsComponent } from "./components/view-reports/view-reports.component";
import { RegisterComponent } from "./components/register/register.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "create-report", component: AddReportComponent },
  { path: "view-reports", component: ViewReportsComponent },
  { path: "register", component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
