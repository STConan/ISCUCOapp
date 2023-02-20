import { SsdService } from './../services/ssd.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {

  constructor(
    private db: SsdService,
  ) { }

  ngOnInit() {}

  ExportSurveys(){
    this.db.exportDB();
  }

}
