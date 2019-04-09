import { Component, OnInit } from '@angular/core';
import { AdalService } from 'adal-angular4';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularAuth';
  constructor(public adalService: AdalService, private http: HttpClient) {
    adalService.init(environment.adalConfig);
  }

  ngOnInit() {
    this.adalService.handleWindowCallback();

    if (this.adalService.userInfo.authenticated) {

      console.log(this.adalService.userInfo.token);

      this.adalService.acquireToken("0fcb057e-eef3-4b72-994d-d0e0cf5cd5d7").subscribe(
        data => {

          console.log(data);

          const authToken = 'Bearer ' + data;
          const headers = new HttpHeaders().set('Authorization', authToken);
          //headers.append("Access-Control-Allow-Origin", "http://localhost:4200");

          this.http.get<any>('https://localhost:5001/api/values', {
            headers: headers
          }).subscribe(
            data => {
              console.log(data);
            }
          );
        }
      );



    }
  }

  login() {
    this.adalService.login();
  }

  logout() {
    this.adalService.clearCache();
    this.adalService.logOut();
  }
}
