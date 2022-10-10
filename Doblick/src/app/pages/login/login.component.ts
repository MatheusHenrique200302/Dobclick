import { Component, OnInit } from '@angular/core';
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faEye = faEye;
  faEyeSlash = faEyeSlash;


  constructor() { }

  ngOnInit(): void {
  }

  SubmitLoginForm(){
    console.log('submit')
  }

}
