import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  isShow:boolean;

  User = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : 'Code is not difficult',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  

  constructor() { }

  ngOnInit() {
    this.isShow=true;
  }
  show(){
    this.isShow=!this.isShow;
  }
}
