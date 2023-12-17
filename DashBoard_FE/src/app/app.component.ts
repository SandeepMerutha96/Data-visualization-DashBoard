import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { registerables } from 'chart.js';
import { Observable } from 'rxjs';
import { ChartServiceService } from 'src/Services/chart-service.service';
Chart.register(...registerables);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Dashboard_ui';
  data:any;
  id: any[] = [];
  endYear: any[] = [];
  intensity: any[] = [];
  relevance: any[] = [];
  likelihood: any[] = [];
  topic: any[] = [];
  region: any[] = [];
  city: any[] = [];
  country: any[] = [];

  constructor(private sservice: ChartServiceService) {}

  ngOnInit() {
   
  }

 
}
