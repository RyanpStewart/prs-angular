import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: Product = new Product();
  productId: number = 0;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = params.id;
      this.productService.getById(this.productId).subscribe(
        (data) => {
          if (data.length > 0) {
            this.product = data[0];
          }
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  deleteProduct() {
    this.productService.deleteById(this.product.id).subscribe(
      (data) => {
        this.router.navigateByUrl('/product/list');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
