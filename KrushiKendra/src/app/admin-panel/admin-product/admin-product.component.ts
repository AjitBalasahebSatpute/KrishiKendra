// import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrl: './admin-product.component.css'
})
export class AdminProductComponent {

  isSolid:boolean=false;
  isLiquid:boolean=false;

  constructor(){}

  productForm = new FormGroup({
    productName: new FormControl('', Validators.required),
    category: new FormControl('None',Validators.required),
    companyName: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    quantity: new FormControl({value:'',disabled:true} ,Validators.required)
  });


  onSubmit(){
    alert("Hey im clicked");
    
  

    console.log(this.productForm.value);
  }
  sizeType(){
      if(this.productForm.value.category==="solid"){
        this.isSolid= true,
        this.isLiquid= false
        this.productForm.get('quantity')?.enable();
      }
     else{
      this.isSolid= false;
      this.isLiquid= true;
      this.productForm.get('quantity')?.enable();

     }
  }
}
 