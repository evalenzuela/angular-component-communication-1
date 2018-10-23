import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {

  @Input() myProfileData = {
    name: '',
    email: '',
    city: '',
    country: ''
  };

  constructor() { }

  ngOnInit() {

  }

}
