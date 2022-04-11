import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LineItem } from 'src/app/models/line-item.model';
import { Request } from 'src/app/models/request.model';
import { LineItemService } from 'src/app/services/line-item.service';
import { RequestService } from 'src/app/services/request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css'],
})
export class RequestLinesComponent implements OnInit {
  request: Request = new Request();
  requestId: number = 0;
  lineItems: LineItem[] = [];
  lineItem: LineItem = new LineItem();
  constructor(
    private requestService: RequestService,
    private lineItemService: LineItemService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        this.requestId = params.id;
        this.requestService.getById(this.requestId).subscribe(
          (data) => {
            if (data.length > 0) {
              this.request = data[0];
              this.lineItemService.getAllByRequest(this.request).subscribe(
                (data) => {
                  this.lineItems = data;
                },
                (error) => console.log(error)
              );
            }
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  }
  setStatusReview() {
    if (this.request.total <= 50) {
      console.log(this.requestId);
      this.requestService.setStatusApproved(this.request).subscribe(
        (data) => {
          this.ngOnInit();
          this.request;
          alert('Request has been sent for review!');
          this.router.navigateByUrl('/request/list');
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.requestService.setStatusReview(this.request).subscribe(
        (data) => {
          this.router.navigateByUrl('request/list');
        },
        (error) => console.log(error)
      );
    }
  }
  setStatusReopened() {
    console.log(this.lineItem);
    this.requestService.setStatusReopened(this.request).subscribe(
      (data) => {
        this.ngOnInit();
      },
      (error) => {
        console.log(error);
      }
    );
  }
  deleteLineItem(id: number) {
    this.lineItemService.deleteLineItem(id).subscribe(
      (data) => {
        this.ngOnInit();
      },
      (error) => console.log(error)
    );
  }
}
