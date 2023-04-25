import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { User } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users: User[] = [];
  public searchTerm: string = '';

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.searchTerm = '';
    this.getUsers();
  }
  onSubmit(): void {
    this.getUsers();
  }
  onClear(): void {
    this.searchTerm = '';
    this.getUsers();
  }
  

  getUsers(): void {
    this.usersService.getUsers().subscribe(users => {
      this.users = users.filter(user =>
        user.role.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    });
  }
  
  
  
  

}
