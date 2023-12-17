import { Router } from '@angular/router';
import { Chart } from 'chart.js';
import { ChartServiceService } from 'src/Services/chart-service.service';
import { Component, OnInit } from '@angular/core';
import { registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit{

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
  selectedRegion: any="World";
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
      this.filterData2(this.selectedRegion)
      this.show1Chartdata(this.sector, this.topic, this.relevance);
      
    });
  }

  show1Chartdata(sector: any, topic: any, relevance: any) {
    if (this.chart) {
      this.chart.destroy();
    }
    const x = new Chart('myChart1', {
      type: 'radar',
      data: {
        labels: sector,
        datasets: [
          {
            label: '# of relevance',
            data: relevance,
            borderWidth: 1,
          },
          {
            label: '# of topic',
            data: topic,
            borderWidth: 1,
          },
        ],
      },
    });
    this.chart = x;
    console.log('chart1 is working');
  }
  filterData2(defaultRegion?: any) {
const yearToFilter = defaultRegion !== undefined ? defaultRegion : this.selectedRegion;


    const filteredData: any[] = this.data.filter(
      (item: { region: any }) => item.region == (yearToFilter)
    );


    const filteredDatatopic: any[] = filteredData.filter(
      (item: { topic: any }) => item.topic == (this.selectedTopic )
    );
    console.log("selectedtopic is :");
    
    console.log(this.selectedTopic);
    console.log("filteredData is :");
    
    console.log(filteredData);

    // Extract filtered values for the chart
    const filteredSector = filteredDatatopic.map((item) => item.sector);
    const filteredTopic = filteredDatatopic.map((item) => item.topic);
    const filteredRelevance = filteredDatatopic.map((item) => item.relevance);

    this.show1Chartdata(filteredSector, filteredTopic, filteredRelevance);
  }

 
  

  
}