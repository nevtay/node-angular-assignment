import { Injectable } from '@angular/core';
import { Report } from '../models/Report'
import { REPORTS } from '../models/Reports'

@Injectable({
  providedIn: 'root',
})
export class ReportService {

  constructor() { }

  getReports(): Report[] {
      return REPORTS
  }

}