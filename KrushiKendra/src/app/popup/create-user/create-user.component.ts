import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserCoreService } from '../../shared/service/user-core.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {

   userfrm= new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName:new FormControl('', Validators.required),
    mobileNumber : new FormControl('', Validators.required),
    villageName:new FormControl('', Validators.required)
   })


  constructor(private dialogRef:MatDialogRef<CreateUserComponent>, 
    private userService:UserCoreService){}



  saveUser(){

    let user = {
      "firstName":this.userfrm.value.firstName,
      "lastName":this.userfrm.value.lastName,
      "villageName": this.userfrm.value.villageName,
      "mobileNumber": this.userfrm.value.mobileNumber
  }

    this.userService.creatUser(user).subscribe(
      (data)=>{
        alert("user saved successfully");
        this.userfrm.reset();
        this.dialogRef.close();
      },
      (err)=>{
        alert("error while creating user")
        console.log(err);
      }
    )
  
  }
    closeModal(){
    this.dialogRef.close();
  }

}
