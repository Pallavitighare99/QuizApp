import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Detail } from 'src/app/detail';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signupModelForm=new Detail("","","","");

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  addUser(){
    this.router.navigate(['/questionLink/quizLink'])
  }
}
  