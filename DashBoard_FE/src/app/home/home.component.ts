import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
import { registerables } from 'chart.js';
import { Observable } from 'rxjs';
import { ChartServiceService } from 'src/Services/chart-service.service';
Chart.register(...registerables);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  // title = 'Dashboard_ui';
  data: any;
  chart: any;

  id: any[] = [];
  endYear: any[] = [];
  intensity: any[] = [];
  relevance: any[] = [];
  likelihood: any[] = [];
  topic: any[] = [];
  region: any[] = [];
  city: any[] = [];
  country: any[] = [];
  citylng: any[] = [];
  citylat: any[] = [];
  sector: any[] = [];
  insight: any[] = [];
  swot: any[] = [];
  url: any[] = [];
  start_year: any[] = [];
  impact: any[] = [];
  added: any[] = [];
  published: any[] = [];
  pestle: any[] = [];
  source: any[] = [];
  title: any[] = [];

  constructor(private sservice: ChartServiceService, private router: Router) {}
  selectedEndYear: any = '2022';
  selectedTopic: any;
  selectedcity: any;
  selectedRegion: any;
  selectedID: any;
  selectedliklelihood: any;
  selectedcountry: any;
  selectedintensity: any;
  selectedrelevence: any;

  ngOnInit() {
    console.log('Ts Is working');
    this.sservice.showData().subscribe((res) => {
      this.data = res;

      if (this.data !== null) {
        for (let i = 0; i < this.data.length; i++) {
          this.topic.push(this.data[i].topic);
          this.endYear.push(this.data[i].endYear);
          this.city.push(this.data[i].city);
          this.country.push(this.data[i].country);
          this.intensity.push(this.data[i].intensity);
          this.likelihood.push(this.data[i].likelihood);
          this.topic.push(this.data[i].topic);
          this.region.push(this.data[i].region);
          this.id.push(this.data[i].id);
          this.relevance.push(this.data[i].relevance);
          this.sector.push(this.data[i].sector);
          this.citylng.push(this.data[i].citylng);
          this.citylat.push(this.data[i].citylat);
          this.insight.push(this.data[i].insight);
          this.swot.push(this.data[i].swot);
          this.impact.push(this.data[i].impact);
          this.added.push(this.data[i].added);
          this.published.push(this.data[i].published);
          this.pestle.push(this.data[i].pestle);
          this.source.push(this.data[i].source);
          this.title.push(this.data[i].title);
          this.url.push(this.data[i].url);
        }
      }
     
      this.filterData(this.selectedEndYear);
      this.updateChart(this.region, this.intensity);
    });
  }

  

  filterData(defaultYear?: any) {
    const yearToFilter = defaultYear !== undefined ? defaultYear : this.selectedEndYear;
    console.log("selectedTopic value is :");
    
console.log(this.selectedTopic);
console.log("Filtered year is");

console.log(yearToFilter);

    const filteredData: any[] = this.data.filter(
      (item: { endYear: any }) => item.endYear == (yearToFilter )
    );
    console.log(filteredData);

    const filteredDatatopic: any[] = filteredData.filter(
      (item: { topic: any }) => item.topic == (this.selectedTopic )
    );
    console.log(filteredDatatopic);
    // Extract filtered values for the chart
    const filteredRegion = filteredDatatopic.map((item) => item.region);
    const filteredIntensity = filteredDatatopic.map((item) => item.intensity);

    this.updateChart(filteredRegion, filteredIntensity);
  }
  // Method to update the chart with new data
  updateChart(region: any, intensity: any) {
    if (this.chart) {
      this.chart.destroy();
    }
    const vc = new Chart('myChart2', {
      type: 'bar',
      data: {
        labels: region,
        datasets: [
          {
            label: '# of intensity',
            data: intensity,
            borderWidth: 1,
          },
        ],
      }
    });
    // You may want to store the chart instance and destroy it before creating a new one
    // this.chart.destroy();
    this.chart = vc;
  }

  // reload() {
  //   if (!window.confirm('Are you sure you wanna leave this page the changes may lost?')) {
  //     this.router.navigate(['/Admin-access']); //Currently navigating to the same page
  //   }
  //   else {
  //   window.location.reload();

  //   }
  // }
}
