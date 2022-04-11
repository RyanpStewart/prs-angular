import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from 'src/app/models/request.model';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css'],
})
export class RequestEditComponent implements OnInit {
  request: Request = new Request();
  requestId: number = 0;

  constructor(
    private requestService: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.requestId = params.id;
      this.requestService.getById(this.requestId).subscribe(
        (data) => {
          if (data.length > 0) {
            this.request = data[0];
          }
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  editRequest() {
    console.log(this.requestId);
    this.requestService.editRequest(this.request).subscribe(
      (data) => {
        this.router.navigateByUrl('/request/list');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
