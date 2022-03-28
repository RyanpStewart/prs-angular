import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { SystemService } from 'src/app/services/system.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-authenticate',
  templateUrl: './user-authenticate.component.html',
  styleUrls: ['./user-authenticate.component.css'],
})
export class UserAuthenticateComponent implements OnInit {
  user: User = new User();

  constructor(
    private userService: UserService,
    private systemService: SystemService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this.userService.authenticate(this.user).subscribe(
      (data) => {
        if (data.length > 0) {
          console.log(data);
          this.systemService.loggedInUser = data[0];
          this.router.navigateByUrl('/user/list');
        } else {
          // username password combo bad
        }
      },

      (error) => console.log(error)
    );
  }
}
