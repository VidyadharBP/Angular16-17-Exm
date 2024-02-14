
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, DestroyRef } from '@angular/core';

@Component({
  selector: 'app-new-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-data.component.html',
  styleUrl: './new-data.component.css'
})
export class NewDataComponent {

  newData:any;
  dataArray:any;
  constructor(private destroyRef: DestroyRef,private http:HttpClient){
    destroyRef.onDestroy(()=>{
      console.log('Component destroyed....');
    }) 
  }

  ngOnInit(){
    this.http.get('https://randomuser.me/api/?results=20&inc=name,picture,id,cell&nat=i').subscribe(res=>{
      // console.log(res);
      this.newData=res;
      this.dataArray=this.newData.results;
      console.log(this.dataArray);
    })
  }
}
