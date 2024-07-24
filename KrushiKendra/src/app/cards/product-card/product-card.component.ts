import { Component, inject, Input, TemplateRef } from '@angular/core';
import { ProductCardModel } from '../../model/product-card.model';
import { ToastService } from '../../popup/toastBar/toast.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() product!:ProductCardModel;
  toastService = inject(ToastService);



  showSuccess(template: TemplateRef<any>) {
		this.toastService.show({ template, classname: 'bg-success text-light text-center', delay: 2000 });
	}

  ngOnDestroy(): void {
		this.toastService.clear();
	}

}
