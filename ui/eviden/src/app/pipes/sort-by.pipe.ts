import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/User.model';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(users: User[], sortCriterion: string, sortOrder: string): User[] {
    if (!users) {
      return users;
    }

    return users.sort((a, b) => {
      const propA = sortCriterion === 'name' ? a.name : a.email;
      const propB = sortCriterion === 'name' ? b.name : b.email;
      return sortOrder === 'asc'
        ? propA.localeCompare(propB)
        : propB.localeCompare(propA);
    });
  }
}
