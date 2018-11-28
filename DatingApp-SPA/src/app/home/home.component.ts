import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  RegisterMode = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  clickregister() {
    this.RegisterMode = !this.RegisterMode;
  }

  cancelRegisterMode(RegisterMode: boolean) {
    this.RegisterMode = RegisterMode;
  }
}
