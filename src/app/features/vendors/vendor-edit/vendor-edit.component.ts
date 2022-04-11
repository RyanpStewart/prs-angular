import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/models/vendor.model';
import { VendorService } from 'src/app/services/vendor.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css'],
})
export class VendorEditComponent implements OnInit {
  vendor: Vendor = new Vendor();
  vendorId: number = 0;
  constructor(
    private vendorService: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.vendorId = params.id;

      this.vendorService.getById(this.vendorId).subscribe(
        (data) => {
          if (data.length > 0) {
            this.vendor = data[0];
          }
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }
  editVendor() {
    console.log(this.vendor.id);
    this.vendorService.editById(this.vendor, this.vendorId).subscribe(
      (data) => {
        console.log(data);
        this.router.navigateByUrl('/vendor/detail/' + this.vendor.id);
      },
      (error) => console.log(error)
    );
  }
}
