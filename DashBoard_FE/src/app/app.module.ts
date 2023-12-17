import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Observable } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/Services/auth.service';
import { AuthGuardService } from 'src/Services/auth-guard.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashBarComponent } from 'src/dash-bar/dash-bar.component';
import { MatListModule } from '@angular/material/list';
import { LineChartComponent } from './line-chart/line-chart.component';
import {MatButtonModule} from '@angular/material/button';
import { RadarchartComponent } from './radarchart/radarchart.component';
@NgModule({
  declarations: [
    AppComponent,HomeComponent,AdminloginComponent,DashBarComponent,LineChartComponent,RadarchartComponent
  ],
  imports: [
    BrowserModule,FormsModule,MatCardModule,
    AppRoutingModule,HttpClientModule, BrowserAnimationsModule,MatToolbarModule,MatFormFieldModule,MatIconModule,MatSnackBarModule,MatSidenavModule,MatListModule,MatButtonModule
  ],
  providers: [AuthService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
