import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'eviden';
  readonly ROOT_URL = 'http://localhost:5038/api';

  constructor(private http: HttpClient) {}
  //users: any = [];
}
