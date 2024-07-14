import { Component, Input } from '@angular/core';
import { ProductCardModel } from '../../model/product-card.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() product!:ProductCardModel;

}
