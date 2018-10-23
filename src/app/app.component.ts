import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userName: string;
  userCity: string;

  updateInfo(profileData: {name: string, email: string, city: string, country: string}) {

    console.log('updateInfo');

    this.userCity = profileData.city;
    this.userName = profileData.name;

  }
}
