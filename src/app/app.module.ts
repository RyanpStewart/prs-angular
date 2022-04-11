import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './features/about/about.component';
import { UserListComponent } from './features/users/user-list/user-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserDetailComponent } from './features/users/user-detail/user-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VendorListComponent } from './features/vendors/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './features/vendors/vendor-detail/vendor-detail.component';
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { ProductDetailComponent } from './features/products/product-detail/product-detail.component';
import { MenuComponent } from './core/menu/menu.component';
import { RequestListComponent } from './features/requests/request-list/request-list.component';
import { UserCreateComponent } from './features/users/user-create/user-create.component';
import { VendorCreateComponent } from './features/vendors/vendor-create/vendor-create.component';
import { ProductCreateComponent } from './features/products/product-create/product-create.component';
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

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    UserListComponent,
    UserDetailComponent,
    VendorListComponent,
    VendorDetailComponent,
    ProductListComponent,
    ProductDetailComponent,
    MenuComponent,
    RequestListComponent,
    UserCreateComponent,
    VendorCreateComponent,
    ProductCreateComponent,
    UserEditComponent,
    VendorEditComponent,
    ProductEditComponent,
    UserAuthenticateComponent,
    RequestCreateComponent,
    RequestDetailComponent,
    RequestListComponent,
    RequestLinesComponent,
    LineItemCreateComponent,
    RequestEditComponent,
    LineItemEditComponent,
    RequestReviewComponent,
    RequestApproveComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    NgbCollapseModule,
    ReactiveFormsModule,




  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
