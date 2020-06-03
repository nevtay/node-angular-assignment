import { Component, OnInit } from '@angular/core';
import { NewAccount } from '../../models/NewAccount';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username:string = '';
  password:string = '';
  isAdmin:boolean = false;
  newAccountModel = new NewAccount(this.username, this.password, this.isAdmin)

  updateUsername(value: string) {
    this.username = value;
  }

  updatePassword(value: string) {
    this.password = value;
  }

  setAdminStatus() {
    return !this.isAdmin
  }

  registerAccount(f: NgForm) {
    console.log(f.value)
  }

  constructor() { }

  ngOnInit() {
    
  }

}
