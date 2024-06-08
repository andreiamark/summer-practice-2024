import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
export interface UserProfile {
  id?: string;
  email: string;
  displayName: string;
}
@Component({
  selector: 'app-add-friends',
  templateUrl: './add-friends.component.html',
  styleUrls: ['./add-friends.component.scss'],
})
export class AddFriendsComponent  implements OnInit {
  users$: Observable<UserProfile[]>;
  selectedUsers: UserProfile[] = [];

  constructor(private userService: UserService) {
    this.users$ = this.userService.getUsers();
  }

  ngOnInit(): void {
    this.userService.getUsers();
  }

  toggleUserSelection(user: UserProfile) {
    const index = this.selectedUsers.findIndex(u => u.id === user.id);
    if (index > -1) {
      this.selectedUsers.splice(index, 1);
    } else {
      this.selectedUsers.push(user);
    }
  }

  isSelected(user: UserProfile): boolean {
    return this.selectedUsers.some(u => u.id === user.id);
  }

}
