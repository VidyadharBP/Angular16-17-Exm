import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PopupComponent } from './popup/popup.component';
import { DetailsComponent } from './details/details.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    // {
    //     path:"",
    //     component:AppComponent
    // },
   {
    path:"details/:fname",
    component:DetailsComponent
   },
   {
    path:"popup",
    component:PopupComponent
   },
   {
    path:"user-details",
    component:UserDetailsComponent
   }
   
];
