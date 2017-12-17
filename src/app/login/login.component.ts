import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  user = {remember: false};
  
    constructor(public dialogRef: MdDialogRef<LoginComponent>) { } //This how you define the variable dialogRef in the 
                                                                    // constructor. This will return the reference 
                                                                    // to my dialog which contains the login component.

    ngOnInit() {
    }
  
    onSubmit() {
      console.log("User: ", this.user); // console.log("User: ", this.user); This is used to replace the server-side
                                        // authentication. The console.log allows us to capture the information and
                                        // view it for development purposes in the Developers Tool in the browser.
      this.dialogRef.close();
    }
  
  }
