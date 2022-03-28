import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/models/request.model';
import { RequestService } from 'src/app/services/request.service';
import { SystemService } from 'src/app/services/system.service';
@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css'],
})
export class RequestListComponent implements OnInit {
  requests: Request[] = [];

  constructor(
    private requestService: RequestService,
    private systemService: SystemService
  ) {}
  ngOnInit(): void {
    const loggedInUser = this.systemService.loggedInUser;
    if (loggedInUser && loggedInUser.admin) {
      this.requestService.getAll().subscribe(
        (data) => {
          this.requests = data;
          console.log(data);
        },
        (error) => console.log(error)
      );
    } else if (loggedInUser && !loggedInUser.admin) {
      this.requestService.getAllByUser(loggedInUser).subscribe(
        (data) => {
          this.requests = data;
          console.log(data);
        },
        (error) => console.log(error)
      );
    }
  }
}
