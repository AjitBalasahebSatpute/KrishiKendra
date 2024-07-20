import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { WareHouseComponent } from './ware-house/ware-house.component';
import { AddUserComponent } from './people/add-user/add-user.component';
import { UpdateUserComponent } from './people/update-user/update-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllUsersComponent } from './people/all-users/all-users.component';
import { BillComponent } from './bill/bill.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatDialogModule} from '@angular/material/dialog';
import { CreateUserComponent } from './popup/create-user/create-user.component';
import { SectionModelComponent } from './dashboard/section-model/section-model.component';
import { ProductCardComponent } from './cards/product-card/product-card.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ShowProductListComponent } from './popup/show-product-list/show-product-list.component';
import { counterReducer } from './shared/Store/reducer';
import { WareHouseProductCardComponent } from './cards/ware-house-product-card/ware-house-product-card.component';
import { AdminProductComponent } from './admin-panel/admin-product/admin-product.component';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    WareHouseComponent,
    AddUserComponent,
    UpdateUserComponent,
    DashboardComponent,
    AllUsersComponent,
    BillComponent,
    CreateUserComponent,
    SectionModelComponent,
    ProductCardComponent,
    ShowProductListComponent,
    WareHouseProductCardComponent,
    AdminProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({couterStore:counterReducer}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    NgbModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatTooltipModule,
    FormsModule,
    MatSort,
    MatSortModule,
    MatPaginatorModule,
    MatPaginator,
    MatTableModule

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
