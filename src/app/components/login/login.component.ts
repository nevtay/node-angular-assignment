import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LoginCredentials } from '../../models/LoginCredentials'
import { NgForm } from '@angular/forms';

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

  attemptLogin(f: NgForm) {
    console.log(f.value)
  }

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
      this.password = params['password'];
    });
  }

}
