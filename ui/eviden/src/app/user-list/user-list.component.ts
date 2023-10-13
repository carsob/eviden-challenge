import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/User.model';
import { Observable, catchError, finalize, of } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  searchTerm: string = '';
  sortOrder: 'asc' | 'desc' = 'asc';
  sortCriterion: 'name' | 'email' = 'name';
  errorMessage$: Observable<string> = of('');
  isLoading$: Observable<boolean> = of(false);

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.isLoading$ = of(true);

    this.userService
      .getUsers()
      .pipe(
        catchError((err) => {
          console.error(err);
          this.errorMessage$ = of(err.message);
          return of([]);
        }),
        finalize(() => (this.isLoading$ = of(false)))
      )
      .subscribe((users) => {
        this.users = users;
      });
  }
  toggleSortOrder() {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
  }
}
