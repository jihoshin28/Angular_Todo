import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private _http:HttpService) { 

  }

  ngOnInit(): void {
    this._http.myMethod()
    console.log("ng init is working")
  }

}
