import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserComponent } from './popup/create-user/create-user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'KrushiKendra';


  constructor(private dialog:MatDialog){}

  addUser(){
    this.dialog.open(CreateUserComponent,{
      position:{top: '150px', left:"28%"},
      panelClass: 'custom-dialog-container',
      width:"700px",
      height:"400px"

    })
  }

}
