import { Component } from '@angular/core';
import { UserDataService } from '../shared/service/user-data.service';
import { User } from '../model/user.model';
import { Subject } from 'rxjs';
import { TestDataService } from '../shared/Store/test-data.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserComponent } from '../popup/create-user/create-user.component';
@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrl: './bill.component.css'
})
export class BillComponent {
filteredUsers!:User[];
key:string="";
selectedUser!:User;
isadduserallowed:boolean=true;
constructor(private userService:UserDataService, private dummyData:TestDataService, private dialog:MatDialog){}

filterUsers(){
  console.log(this.key);
    if (this.key.trim() === "") {
      this.filteredUsers= [];
      return;
    }
    const results = this.userService.searchUsers(this.key, this.dummyData.userList);
    this.filteredUsers=results;
    console.log(results);

  }

  select(user:User){
    this.selectedUser=user;
    this.isadduserallowed=false;
    this.key=""
    console.log(user);
  }

  addUser(){
    this.dialog.open(CreateUserComponent,{
      position:{top: '100px', left:"28%"},
      panelClass: 'custom-dialog-container',
      width:"700px",
      height:"400px"

    })
  }

}
