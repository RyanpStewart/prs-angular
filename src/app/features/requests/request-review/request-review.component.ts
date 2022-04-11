import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/models/request.model';

import { RequestService } from 'src/app/services/request.service';
import { SystemService } from 'src/app/services/system.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css'],
})
export class RequestReviewComponent implements OnInit {
  requests: Request[] = [];
  request: Request = new Request();
  requestId: number = 0;
  constructor(
    private requestService: RequestService,
    private systemService: SystemService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const loggedInUser = this.systemService.loggedInUser;
    if (loggedInUser && loggedInUser.reviewer) {
      this.requestService.getAllForReview(loggedInUser).subscribe(
        (data) => {
          this.requests = data;
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }



}

