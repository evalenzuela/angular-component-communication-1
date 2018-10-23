import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../../models/user.model';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  profile: User;
  @Input() countries = [];
  @Output() profileUpdated = new EventEmitter<{name: string, email: string, country: string, city: string}>();

  constructor() { }

  ngOnInit() {
    console.log(this.countries);
  }

  onSaveProfile() {
    this.profile = new User('Eduardo', 'valenzuela.eduardo@gmail.com', 'Lima', 'Perú');
    console.log('Emitting...');
    this.profileUpdated.emit({
      name: this.profile.name,
      email: this.profile.email,
      city: this.profile.city,
      country: this.profile.country
    });
  }

}
