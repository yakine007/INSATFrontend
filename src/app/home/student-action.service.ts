import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentActionService {

  showActions:boolean;
  showSignInUp:boolean=true;


  constructor() { }
}
