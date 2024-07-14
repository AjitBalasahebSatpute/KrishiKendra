import { Component } from '@angular/core';
import { UserDataService } from '../shared/service/user-data.service';
// import { User } from '../model/user.model';
import { catchError, map, Observable, of, startWith, Subject } from 'rxjs';
import { TestDataService } from '../shared/Store/test-data.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserComponent } from '../popup/create-user/create-user.component';
import { FormControl } from '@angular/forms';
import { User } from '../model/user.model';


// export interface User {
//   name: string;
// }

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrl: './bill.component.css'
})
export class BillComponent {
// filteredOptions!:User[];
 filteredOptions!: Observable<User[]>;
key:string="";
selectedUser!:User;
isadduserallowed:boolean=true;


myControl = new FormControl<string | User>('');
  // options: User[] = [{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}];
  // filteredOptions!: Observable<User[]>;

constructor(private userService:UserDataService, private dummyData:TestDataService, private dialog:MatDialog){}

ngOnInit() {
  this.filteredOptions = this.myControl.valueChanges.pipe(
    startWith(''),
    map(value => {
      console.log("calling search ")
      return value?this._filter(value as string):[];
    },
    catchError((err: any) => {
      console.error('Error occurred:', err);
      // Handle the error and return an empty array or a default value
      return of([]);
    })));
}

// filterUsers(){
//   console.log(this.key);
//     if (this.key.trim() === "") {
//       this.filteredUsers= [];
//       return;
//     }
//     const results = this.userService.searchUsers(this.key, this.dummyData.userList);
//     this.filteredUsers=results;
//     console.log(results);

//   }

  select(event:any){
    this.selectedUser = event.option.value;
    console.log('Selected user:', this.selectedUser);
    this.isadduserallowed=false;
    this.myControl.reset();

  }

  addUser(){
    this.dialog.open(CreateUserComponent,{
      position:{top: '100px', left:"28%"},
      panelClass: 'custom-dialog-container',
      width:"700px",
      height:"400px"

    })
  }

  displayFn(user: User): string {
    return user && user.firstName ? user.firstName : '';
  }

  //  _filter(name: string): User[] {
  //   const filterValue = name.toLowerCase();

  //   return this.dummyData.userList.filter(option => option.firstName.toLowerCase().includes(filterValue) ||  option.lastName.toLowerCase().includes(filterValue));
  // }

  private _filter(name: string): any[] {
    if (typeof name !== 'string') {
      return []; // Return an empty array if name is not a string
    }
  
    const filterValue = name.toLowerCase();
      return this.dummyData.userList.filter(option => option.firstName.toLowerCase().includes(filterValue) ||  option.lastName.toLowerCase().includes(filterValue));

  }
  
}
