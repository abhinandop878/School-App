import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private hhtp:HttpClient) { }
  viewStudent=()=>{
    return this.hhtp.get("")
  }
  addStudent=(data:any)=>{
    return this.hhtp.post("",data)
  }
}
