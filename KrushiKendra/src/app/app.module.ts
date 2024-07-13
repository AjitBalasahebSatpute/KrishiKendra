import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
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
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    NgbModule,
    MatDialogModule,

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
