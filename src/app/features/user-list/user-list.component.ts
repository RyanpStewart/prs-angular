import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
<<<<<<< HEAD
=======

>>>>>>> 72eb730b1e911a63cef56ae4106e3b22d5ced3f7
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAll().subscribe(
      (data) => {
<<<<<<< HEAD
        console.log(data)
        this.users = data;
      },
      (error) => {console.log(error) }
=======
        console.log(data);
        this.users = data;
      },
      (error) => {
        console.log(error);
      }
>>>>>>> 72eb730b1e911a63cef56ae4106e3b22d5ced3f7
    );
  }
}
