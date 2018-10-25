import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  countries = [];

  @Output() profileUpdated = new EventEmitter<User>();

  constructor() { }

  myProfileData: User = new User(
    '', '', '', ''
  );

  ngOnInit() {
    this.countries = [
      {name: 'Peru', id: 'Peru'},
      {name: 'USA', id: 'USA'}
    ];
  }

  showProfileInfo(profileData: User) {

    this.myProfileData = profileData;

    this.profileUpdated.emit(profileData);

  }

}
