import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {


  constructor(private dialog:MatDialog){}

  // addUser(){
  //   this.dialog.open(createUser,{
  //     position:{top: '0px', left:"25%"},
  //     panelClass: 'custom-dialog-container',
  //     width:"600px",
  //     height:"60px"

  //   })
  // }

}
