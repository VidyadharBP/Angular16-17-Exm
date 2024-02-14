import { Component, DestroyRef } from '@angular/core';
import { PopupComponent } from './popup/popup.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CommonModule } from '@angular/common';
import {RouterModule } from '@angular/router';
import { UserDetailsService } from './user-details.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,PopupComponent,UserDetailsComponent,UserDetailsComponent,PopupComponent,
    RouterModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular16-17-Exm';
  popupFlag = this.us.popUpCmpFlag;
  
  constructor(private us:UserDetailsService){  }
  openPopup(){
    // this.popupFlag = true;
    this.us.setpopUpCmpFlag(true);
  }

  
}
