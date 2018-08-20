import { UserServiceService } from './user-service.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public _auth: UserServiceService, public _router: Router){}

  canActivate():boolean{
    if(this._auth.loggedIn()){
      return true;
    }else{
      this._router.navigate(['/login']);
      return false;
    }
  }
}
