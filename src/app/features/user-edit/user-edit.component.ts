import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
  user: User = new User();
  userId: number = 0;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = params.id;

      this.userService.getById(this.userId).subscribe(
        (data) => {
          if (data.length > 0) {
            this.user = data[0];
          }
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }
  editUser() {
    console.log(this.user.id);
    this.userService.editById(this.user, this.userId).subscribe(
      (data) => {
        console.log(data);
        this.router.navigateByUrl('/user/list');
      },
      (error) => console.log(error)
    );
  }
}
