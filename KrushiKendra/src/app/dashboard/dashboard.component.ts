import { Component, inject, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { ProductCardModel } from '../model/product-card.model';
import { TestDataService } from '../shared/Store/test-data.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserComponent } from '../popup/create-user/create-user.component';
import { ToastService } from '../popup/toastBar/toast.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  productSectionList:string[]=["solid Fertilizer","Liquid Fertilizer", "Pestisides"];
  
  productList!:ProductCardModel[];

  cart !:ProductCardModel [];



  constructor( private dummyDataService:TestDataService, private dialog:MatDialog){}

  ngOnInit(): void {
    this.productList=this.dummyDataService.productList;
  }
  addUser(){
    this.dialog.open(CreateUserComponent,{
      position:{top: '150px', left:"28%"},
      panelClass: 'custom-dialog-container',
      width:"700px",
      height:"400px"

    })
  }

  addToCart(product:ProductCardModel){
  this.cart.push(product);
  }

}
