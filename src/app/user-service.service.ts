import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  country = ['INDIA','USA', 'UK', 'UAE', 'CHINA','GERMANY','SPAIN'];
  state = ['TamilNadu','Kerala','Karnataka','Goa','Pondicherry','Mumbai','UttarPradesh'];
  city = [ 'Chennai', 'Mumbai', 'Bangalore', 'Delhi'];
  show = true;
  constructor(public http: HttpClient) { }


  RegisterUser(data)
  {
    return this.http.post("http://localhost:3000/register", data);
  }
  LoginUser(data)
  {
     return this.http.post("http://localhost:3000/login", data);
  }
 loggedIn(){
   return !!localStorage.getItem('token');
 }
 getToken(){
   console.log("GetMyToken",localStorage.getItem('token'))
   return localStorage.getItem('token');
 }


}
