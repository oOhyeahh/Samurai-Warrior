import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  RegisterMode = false;
  isCollapsed = true;
  // tslint:disable-next-line:max-line-length
  photo = 'https://res.cloudinary.com/teepublic/image/private/s--Q7yqNTSH--/t_Preview/b_rgb:eae0c7,c_limit,f_jpg,h_630,q_90,w_630/v1505713983/production/designs/1909782_0.jpg';
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
