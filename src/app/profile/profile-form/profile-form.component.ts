import {Component, OnInit, Input, Output, EventEmitter, ViewChild} from '@angular/core';

import { User } from '../../models/user.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  profile: User;
  @Input() countries = [];
  @Output() profileUpdated = new EventEmitter<User>();
  @ViewChild('f') profileForm: NgForm;
  defaultCountry: string = 'Peru';

  constructor() { }

  ngOnInit() {

  }

  onSubmit() {
    this.profile = new User(
      this.profileForm.value.name,
      this.profileForm.value.email,
      this.profileForm.value.city,
      this.profileForm.value.country
    );

    this.profileUpdated.emit(this.profile);
  }

}
