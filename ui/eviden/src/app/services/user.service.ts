import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { User } from '../models/User.model';

const USER_DATA_URL = 'assets/users.json';
const BASE_API_URL = 'http://localhost:5038/api';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(BASE_API_URL + '/getUsers').pipe(
      delay(2000),
      map((users) =>
        users.map((user) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          avatar: user.avatar,
        }))
      )
    );
  }
}
