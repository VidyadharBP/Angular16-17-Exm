import { Component, Input } from '@angular/core';
import { NewDataComponent } from '../new-data/new-data.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [NewDataComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  newDataFlag: boolean = false;
  @Input({required:true}) fname!: string;

  newdataCmp(): void {
    this.newDataFlag = true;
  }

  distroyed(){
    this.newDataFlag = false;
  }
}
