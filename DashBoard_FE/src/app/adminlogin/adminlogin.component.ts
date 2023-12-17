import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/Services/auth.service'; 
import { RouteService } from 'src/Services/route.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit{
  constructor(private authService: AuthService, private route: Router,private fb: FormBuilder) { this.loginForm = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
    adminSecurityCode: ['', Validators.required], // Add validation for adminSecurityCode
  });}
  loginForm: FormGroup;
  ngOnInit(): void {
    
  }
  
  userName = "";
  password = "";

  showCorrectLogin = false;
  showInCorrectLogin = false;

  submit() {
    if (this.userName == 'sandeep6@gmail.com' && this.password == 'sandeep@123' ) {
      this.authService.login();
      this.route.navigate(['/Admin-access']);
      console.log("Access Allowed");
      

    }
    else {
      this.authService.logout();
    }
    this.clear();
  }

  clear() {
    this.userName = "";
    this.password = "";
  
  }


}


