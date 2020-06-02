import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AddReportComponent } from './components/add-report/add-report.component';
import { ViewReportsComponent } from './components/view-reports/view-reports.component';


const routes: Routes = [
  {path: 'create-report', component: AddReportComponent},
  {path: 'view-reports', component: ViewReportsComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
