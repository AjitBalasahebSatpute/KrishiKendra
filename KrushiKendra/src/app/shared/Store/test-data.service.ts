import { Injectable } from '@angular/core';
import { User } from '../../model/user.model';
import { ProductCardModel } from '../../model/product-card.model';

@Injectable({
  providedIn: 'root'
})
export class TestDataService {

  constructor() { }

  userList:User[]=[
    {userID:1,
      firstName:"Ram",
      lastName:"Kadam",
      mobileNumber:"123456789",
      role:"farmer",
      address:{
        village:"Dasure",
        city:"padharpur",
        pincode:"413304",
        landMark:"school"
      }
    
    },
    {
      userID:2,
      firstName:"Mukund",
      lastName:"Khapale",
      mobileNumber:"123456789",
      role:"farmer",
      address:{
        village:"Dasure",
        city:"padharpur",
        pincode:"413304",
        landMark:"school"
      }
    },
    {
      userID:3,
      firstName:"Ajay",
      lastName:"More",
      mobileNumber:"123456789",
      role:"farmer",
      address:{
        village:"Dasure",
        city:"padharpur",
        pincode:"413304",
        landMark:"school"
      }
    },
    {
      userID:4,
      firstName:"Ajit",
      lastName:"Satpute",
      mobileNumber:"123456789",
      role:"farmer",
      address:{
        village:"Dasure",
        city:"padharpur",
        pincode:"413304",
        landMark:"school"
      }
    
    }
  ]

  productList:ProductCardModel []=[

    {
      productID:1,
      productName:"Uria",
      productPrice:"300",
      productQuantity:10,
      productImage:"https://gogarden.co.in/cdn/shop/files/71yg6hRnpTL._SL1200_fac2b8e7-208b-482d-9493-07d03daaff6f.jpg?v=1684132066"
    },
    {
      productID:1,
      productName:"Uria",
      productPrice:"300",
      productQuantity:10,
      productImage:"https://gogarden.co.in/cdn/shop/files/71yg6hRnpTL._SL1200_fac2b8e7-208b-482d-9493-07d03daaff6f.jpg?v=1684132066"
    },
    {
      productID:1,
      productName:"Uria",
      productPrice:"300",
      productQuantity:10,
      productImage:"https://gogarden.co.in/cdn/shop/files/71yg6hRnpTL._SL1200_fac2b8e7-208b-482d-9493-07d03daaff6f.jpg?v=1684132066"
    },
    {
      productID:1,
      productName:"Uria",
      productPrice:"300",
      productQuantity:10,
      productImage:"https://gogarden.co.in/cdn/shop/files/71yg6hRnpTL._SL1200_fac2b8e7-208b-482d-9493-07d03daaff6f.jpg?v=1684132066"
    },
    {
      productID:1,
      productName:"10-26-26",
      productPrice:"700",
      productQuantity:8,
      productImage:"https://kissanemart.com/storage/iffco-102626-major-nutrient-800x800.jpg"
    },
    {
      productID:1,
      productName:"19-19-19",
      productPrice:"600",
      productQuantity:10,
      productImage:"https://mahadhan.co.in/wp-content/uploads/2017/05/Bag-Mockup-19-19.jpg"
    },
    {
      productID:1,
      productName:"18-18-18",
      productPrice:"1000",
      productQuantity:10,
      productImage:"https://cdn-prodapi.iffcobazar.in/pub/media/catalog/product/cache/5f3447475aa96bb6c8cc6886bb71b2b4/u/r/urea_18_18_18_1kg-f_2.jpg"
    },
    {
      productID:1,
      productName:"18-18-18",
      productPrice:"1000",
      productQuantity:10,
      productImage:"https://cdn-prodapi.iffcobazar.in/pub/media/catalog/product/cache/5f3447475aa96bb6c8cc6886bb71b2b4/u/r/urea_18_18_18_1kg-f_2.jpg"
    },
    {
      productID:1,
      productName:"18-18-18",
      productPrice:"1000",
      productQuantity:10,
      productImage:"https://cdn-prodapi.iffcobazar.in/pub/media/catalog/product/cache/5f3447475aa96bb6c8cc6886bb71b2b4/u/r/urea_18_18_18_1kg-f_2.jpg"
    },{
      productID:1,
      productName:"18-18-18",
      productPrice:"1000",
      productQuantity:10,
      productImage:"https://cdn-prodapi.iffcobazar.in/pub/media/catalog/product/cache/5f3447475aa96bb6c8cc6886bb71b2b4/u/r/urea_18_18_18_1kg-f_2.jpg"
    }
  ]
}
