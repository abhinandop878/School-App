import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
  status:boolean=false
  fetchData=()=>{
    this.myapi.viewStudent().subscribe((data)=>{
      this.schoolData=data
      this.status=true
    })
  }
  schoolData:any=[]
  ngOnInit(): void {
  }

}
