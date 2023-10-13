import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/User.model';

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

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }
  toggleSortOrder() {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
  }
}
