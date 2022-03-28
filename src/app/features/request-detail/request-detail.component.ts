import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';
import { Request } from 'src/app/models/request.model';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css'],
})
export class RequestDetailComponent implements OnInit {
  request: Request = new Request();

  constructor(
    private requestService: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}

  editRequest() {
    this.requestService.editRequest(this.request).subscribe(
      (data) => {
        this.router.navigateByUrl('/request/edit');
      },
      (error) => console.log(error)
    );
  }
}
