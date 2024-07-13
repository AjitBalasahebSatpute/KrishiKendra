import { Component, OnInit } from '@angular/core';
import { ProductCardModel } from '../model/product-card.model';
import { TestDataService } from '../shared/Store/test-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  productSectionList:string[]=["solid Fertilizer"];
  // ,"Liquid Fertilizer"
  productList!:ProductCardModel[];

  constructor( private dummyDataService:TestDataService){}

  ngOnInit(): void {
    this.productList=this.dummyDataService.productList;
  }
}
