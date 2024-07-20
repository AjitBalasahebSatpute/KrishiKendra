import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WareHouseComponent } from './ware-house/ware-house.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddUserComponent } from './people/add-user/add-user.component';
import { UpdateUserComponent } from './people/update-user/update-user.component';
import { BillComponent } from './bill/bill.component';
import { AdminProductComponent } from './admin-panel/admin-product/admin-product.component';

const routes: Routes = [
  {path:"warehouse",component:WareHouseComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"people",children:[
    {path:"add",component:AddUserComponent},
    {path:"update", component:UpdateUserComponent},
    {path:"",pathMatch:'full',redirectTo:"add"}
  ]},
  {path:"product",children:[
    {path:"add",component:AdminProductComponent},
    {path:"",pathMatch:'full', redirectTo:"add"}
  ]},
  {path:"bill",component:BillComponent},
  {path:"**",redirectTo:"dashboard"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
