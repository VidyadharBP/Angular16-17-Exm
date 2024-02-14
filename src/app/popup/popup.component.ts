import { Component, DestroyRef } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
  userFormData: any =FormGroup;

  constructor(private us:UserDetailsService) {
    
  }

  ngOnInit(): void {
    this.userFormData = new FormGroup({
      fName: new FormControl("",Validators.required),
      lName: new FormControl("",Validators.required),
      email: new FormControl("",[Validators.required,Validators.email]),
    })
  }

  userData(){
    let userFormdata = this.userFormData.value;
    console.log(userFormdata);
    this.us.addUser(userFormdata);
    this.us.setpopUpCmpFlag(false);
  }

  resetForm(){
    this.userFormData.reset();
  }
}
