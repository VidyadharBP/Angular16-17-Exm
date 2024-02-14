import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserDetailsService } from '../user-details.service';
import { CommonModule } from '@angular/common';
import {Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-user-details',
  standalone: true,
  changeDetection:ChangeDetectionStrategy.OnPush,
  imports: [CommonModule,RouterOutlet,RouterLink,RouterModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {

  dataArray =this.us.userArray;

  constructor(private us: UserDetailsService, private router:Router) { }

  ngOnInit(): void {
  }

  navToDetails(val:any){
    console.log(val);
    this.router.navigate(['/details',val.fName]);
  }
}
