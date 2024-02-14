import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  userArray:WritableSignal<any[]>= signal([]); 
  popUpCmpFlag : WritableSignal<boolean> = signal(false)

  constructor() { }

  addUser(userData:any){
    this.userArray.update(value => [...value, userData]);
    console.log(this.userArray);
  }

  setpopUpCmpFlag(newValue: boolean) {
    this.popUpCmpFlag.set(newValue);
  }
}


