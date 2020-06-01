import { Component, OnInit } from '@angular/core';
import { LoginCredentials } from '../../models/LoginCredentials'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = '';

  password:string = '';

  loginModel = new LoginCredentials(this.username, this.password)

  updateUsername(value: string) {
    this.username = value;
  }

  updatePassword(value: string) {
    this.password = value;
  }

  constructor() { }

  ngOnInit() {
  }

}
