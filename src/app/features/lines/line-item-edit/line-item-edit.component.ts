import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LineItem } from 'src/app/models/line-item.model';
import { Product } from 'src/app/models/product.model';
import { Request } from 'src/app/models/request.model';
import { RequestService } from 'src/app/services/request.service';
import { LineItemService } from 'src/app/services/line-item.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-line-item-edit',
  templateUrl: './line-item-edit.component.html',
  styleUrls: ['./line-item-edit.component.css'],
})
export class LineItemEditComponent implements OnInit {
  lineItem: LineItem = new LineItem();
  request: Request = new Request();
  lineItemId: number = 0;
  products: Product[] = [];

  constructor(
    private requestService: RequestService,
    private route: ActivatedRoute,
    private lineItemService: LineItemService,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.lineItemId = params.id;
      this.lineItemService.getById(this.lineItemId).subscribe(
        (data) => {
          if (data.length > 0) {
            this.lineItem = data[0];
          }
          console.log(data);
        },
        (error) => console.log(error)
      );
    });

    this.productService.getAll().subscribe(
      (data) => {
        this.products = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  updateLineItem() {
    this.lineItemService.editLineItemById(this.lineItem).subscribe(
      (data) => {
        this.router.navigateByUrl('request/lines/' + this.lineItem.request.id);
      },
      (error) => console.log(error)
    );
  }
}
