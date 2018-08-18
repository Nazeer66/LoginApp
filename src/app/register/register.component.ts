import { UserServiceService } from './../user-service.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  countries;
  states;
  cities;
  myCountry = "INDIA";
  myState = "TamilNadu";
  myCity ="Chennai";
  constructor(public myService : UserServiceService, public router: Router) { }

  ngOnInit() {
    this.countries = this.myService.country;
    // console.log('Country', this.countries);
    this.states = this.myService.state;
    this.cities = this.myService.city;
  }

  registerForm(form:NgForm){
    console.log(form.value);
    this.myService.RegisterUser(form.value).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/login']);
    })

  }

}
