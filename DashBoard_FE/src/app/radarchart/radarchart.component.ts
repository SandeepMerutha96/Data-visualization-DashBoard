import { Router } from '@angular/router';
import { Chart } from 'chart.js';
import { ChartServiceService } from 'src/Services/chart-service.service';
import { Component, OnInit } from '@angular/core';
import { registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-radarchart',
  templateUrl: './radarchart.component.html',
  styleUrls: ['./radarchart.component.css']
})
export class RadarchartComponent implements OnInit{
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
  
  selectedintensity: any;
  selectedUrl: any;
  selectedPestle: any="Technological";

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
      this.filterData2(this.selectedPestle)
      this.show1Chartdata(this.pestle, this.relevance);
      
    });
  }

  show1Chartdata(pestle: any, relevance: any) {
    if (this.chart) {
      this.chart.destroy();
    }
    const x = new Chart('myChart4', {
      type: 'bar',
      data: {
        labels: pestle,
        datasets: [
          {
            label: '# of relevance',
            data: relevance,
            borderWidth: 1,
          },
         
        ],
      },
    });
    this.chart = x;
    console.log('chart1 is working');
  }
  filterData2(defaultPestle?: any) {
const pestleToFilter = defaultPestle !== undefined ? defaultPestle : this.selectedPestle;


    const filteredData: any[] = this.data.filter(
      (item: { pestle: any }) => item.pestle == (pestleToFilter)
    );
    // const filteredDatatopic: any[] = filteredData.filter(
    //   (item: { topic: any }) => item.topic == (this.selectedUrl )
    // );
    // console.log("selectedtopic is :");
    console.log(this.selectedPestle);
    console.log("filteredData is :");
    console.log(filteredData);

    // Extract filtered values for the chart
    // const filteredUrl = filteredDatatopic.map((item) => item.url);
    const filteredPestle = filteredData.map((item) => item.pestle);
    const filteredRelevance = filteredData.map((item) => item.relevance);

    this.show1Chartdata(filteredPestle, filteredRelevance);
  }
  

  
}