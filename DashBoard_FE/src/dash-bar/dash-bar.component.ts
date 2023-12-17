import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AsyncPipe, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-bar',
  templateUrl: './dash-bar.component.html',
  styleUrls: ['./dash-bar.component.css']
})
export class DashBarComponent {
  private breakpointObserver = inject(BreakpointObserver);
  constructor(private router:Router){}

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    reload() {
      if (!window.confirm('Are you sure you wanna leave this page the changes may lost?')) {
        this.router.navigate(['/Admin-access']); //Currently navigating to the same page
      }
      else {
      window.location.reload();
  
      }
    }


    
}
