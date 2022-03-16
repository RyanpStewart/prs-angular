import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/models/vendor.model';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  //Keeping track of our list of vendors
  vendors: Vendor[] = [];

  //Inject service using constructor injection
  constructor(private vendorService: VendorService) { }

  ngOnInit(): void {
    //subscribe to the observable from the service
    this.vendorService.getAll().subscribe(
      data => {
        this.vendors = data
        console.log(data)
      },
      error => { console.log(error) }
    )
  }

}
