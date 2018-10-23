import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  countries = [];

  @Output() profileUpdated = new EventEmitter<{name: string, email: string, country: string, city: string}>();

  constructor() { }

  myProfileData = {
    name: '',
    email: '',
    city: '',
    country: ''
  }

  ngOnInit() {
    this.countries = [
      {name: 'Peru', id: 'Peru'},
      {name: 'USA', id: 'USA'}
    ];
  }

  showProfileInfo(profileData: {name: string, email: string, country: string, city: string}) {
    this.myProfileData.name = profileData.name;
    this.myProfileData.email = profileData.email;
    this.myProfileData.city = profileData.city;
    this.myProfileData.country = profileData.country;

    this.profileUpdated.emit({
      name: this.myProfileData.name,
      email: this.myProfileData.email,
      country: this.myProfileData.country,
      city: this.myProfileData.city}
    );

    console.log('myProfileData');

  }

}
