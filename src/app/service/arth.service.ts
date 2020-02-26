import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArthService {

  constructor() { }
  public add(n1:number,n2:number):number{
    return n1+n2;
  }
}
