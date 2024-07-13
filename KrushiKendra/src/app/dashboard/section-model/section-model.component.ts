import { Component, Input } from '@angular/core';
import { ProductCardModel } from '../../model/product-card.model';

@Component({
  selector: 'app-section-model',
  templateUrl: './section-model.component.html',
  styleUrl: './section-model.component.css'
})
export class SectionModelComponent {

  @Input() sectionTitle!:string;
  @Input() ItemList !: ProductCardModel[];
  

}
