import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../shared/Store/actions';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ware-house',
  templateUrl: './ware-house.component.html',
  styleUrl: './ware-house.component.css'
})
export class WareHouseComponent implements OnInit{

  count !:number;


  constructor(private store: Store<{couterStore:number}>, private router:Router){}

  ngOnInit(): void {
    this.store.select("couterStore").subscribe(
      (data:any)=>{this.count = data.counter},
      err=>{}
    )
    // this.count$ = this.store.select('couterStore');

  } 
  increment() {
    // TODO: Dispatch an increment action
    this.store.dispatch(increment());

  }

  decrement() {
    // TODO: Dispatch a decrement action
    this.store.dispatch(decrement());

  }

  reset() {
    // TODO: Dispatch a reset action
    this.store.dispatch(reset());

  }

  addProductRoute(){
    this.router.navigate(['/admin'])
  }
}
