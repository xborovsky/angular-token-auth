import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers, URLSearchParams } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFailed:boolean = false;

  constructor(private http:Http, private router:Router) { }

  ngOnInit() {
  }

  onLogin(form) {
    this.loginFailed = false;
    
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('username', form.username);
    urlSearchParams.append('password', form.password);
    let body = urlSearchParams.toString()

    this.http.post('http://localhost:8080/token-authenticator/login', body, options)
      .subscribe(
        token => {
          localStorage.setItem('token', token.text());
          this.router.navigate(['secured']);
        },
        error => this.loginFailed = true
      );
  }

}
