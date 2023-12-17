import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private authservice:AuthService,private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   const auth =this.authservice.loginStatus();


  if (auth == true) {
    return auth;
  }
  else {
    this.router.navigate(['/home']);
    return auth;
  }
  //  if(isLoggedIn){
  //   return true;
  //  }
  //  else{
  //   return this.router.navigate(['/']);
  //  }
  //   throw new Error('Method not implemented.');
  }

  
}

  
