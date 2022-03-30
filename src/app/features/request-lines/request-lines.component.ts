import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LineItem } from 'src/app/models/line-item.model';
import { Request } from 'src/app/models/request.model';
import { LineItemService } from 'src/app/services/line-item.service';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css'],
})
export class RequestLinesComponent implements OnInit {
  request: Request = new Request();
  requestId: number = 0;
  lineItems: LineItem[] = [];

  constructor(
    private requestService: RequestService,
    private lineItemService: LineItemService,
    private route: ActivatedRoute
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
}
