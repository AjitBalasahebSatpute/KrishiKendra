import { Component, Input } from '@angular/core';
import { ProductCardModel } from '../../model/product-card.model';
import { MatDialog } from '@angular/material/dialog';
import { ShowProductListComponent } from '../../popup/show-product-list/show-product-list.component';

@Component({
  selector: 'app-section-model',
  templateUrl: './section-model.component.html',
  styleUrl: './section-model.component.css'
})
export class SectionModelComponent {

  @Input() sectionTitle!:string;
  @Input() ItemList !: ProductCardModel[];

  constructor(private dialog:MatDialog){}
  
  showAll(catergory:string){
    this.dialog.open(ShowProductListComponent,{
      position:{top:'40px'},
      width:'700px',
      height:'700px',
      data:{
        catergory:catergory
      }

    })
  }
}
