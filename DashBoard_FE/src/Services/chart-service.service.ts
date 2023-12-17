import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ChartServiceService {
  
  constructor(private http:HttpClient) { console.log("LOve OK ");}
url="http://localhost:8080/api/getData";

showData(): Observable<any>{
 return this.http.get(this.url);
}


}
