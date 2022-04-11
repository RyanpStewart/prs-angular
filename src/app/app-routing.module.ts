import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './features/about/about.component';
import { ProductCreateComponent } from './features/products/product-create/product-create.component';
import { ProductDetailComponent } from './features/products/product-detail/product-detail.component';
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { RequestListComponent } from './features/requests/request-list/request-list.component';
import { UserCreateComponent } from './features/users/user-create/user-create.component';
import { UserDetailComponent } from './features/users/user-detail/user-detail.component';
import { UserListComponent } from './features/users/user-list/user-list.component';
import { VendorCreateComponent } from './features/vendors/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './features/vendors/vendor-detail/vendor-detail.component';
import { VendorListComponent } from './features/vendors/vendor-list/vendor-list.component';
import { UserEditComponent } from './features/users/user-edit/user-edit.component';
import { VendorEditComponent } from './features/vendors/vendor-edit/vendor-edit.component';
import { ProductEditComponent } from './features/products/product-edit/product-edit.component';
import { UserAuthenticateComponent } from './features/users/user-authenticate/user-authenticate.component';
import { RequestCreateComponent } from './features/requests/request-create/request-create.component';
import { RequestDetailComponent } from './features/requests/request-detail/request-detail.component';
import { RequestLinesComponent } from './features/requests/request-lines/request-lines.component';
import { LineItemCreateComponent } from './features/lines/line-item-create/line-item-create.component';
import { RequestEditComponent } from './features/requests/request-edit/request-edit.component';
import { LineItemEditComponent } from './features/lines/line-item-edit/line-item-edit.component';
import { RequestReviewComponent } from './features/requests/request-review/request-review.component';
import { RequestApproveComponent } from './features/requests/request-approve/request-approve.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'login', component: UserAuthenticateComponent },
  { path: 'user/list', component: UserListComponent },
  { path: 'user/detail/:id', component: UserDetailComponent },
  { path: 'user/create', component: UserCreateComponent },
  { path: 'user/edit/:id', component: UserEditComponent },
  { path: 'vendor/list', component: VendorListComponent },
  { path: 'vendor/detail/:id', component: VendorDetailComponent },
  { path: 'vendor/create', component: VendorCreateComponent },
  { path: 'vendor/edit/:id', component: VendorEditComponent },
  { path: 'product/list', component: ProductListComponent },
  { path: 'product/detail/:id', component: ProductDetailComponent },
  { path: 'product/create', component: ProductCreateComponent },
  { path: 'product/edit/:id', component: ProductEditComponent },
  { path: 'request/detail/:id', component: RequestDetailComponent },
  { path: 'request/list', component: RequestListComponent },
  { path: 'request/create', component: RequestCreateComponent },
  { path: 'request/lines/:id', component: RequestLinesComponent },
  { path: 'request/edit/:id', component: RequestEditComponent },
  { path: 'request/review', component: RequestReviewComponent },
  { path: 'request/approve/:id', component: RequestApproveComponent },
  { path: 'lines/create/:id', component: LineItemCreateComponent },
  { path: 'lines/edit/:id', component: LineItemEditComponent },
  { path: '**', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
