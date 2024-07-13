import { Injectable } from '@angular/core';
import { User } from '../../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

searchUsers(searchTerm: string, users: User[]): User[] {
  const lowerCaseSearchTerm = searchTerm.toLowerCase();
  return users.filter(user => {
    const fullName = `${user.firstName} ${user.lastName}`;
    return (
      user.firstName.toLowerCase().startsWith(lowerCaseSearchTerm) ||
      user.lastName.toLowerCase().startsWith(lowerCaseSearchTerm) ||
      fullName.toLowerCase().startsWith(lowerCaseSearchTerm)
    );
  });
}
}
