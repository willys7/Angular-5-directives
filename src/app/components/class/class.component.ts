import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styles: []
})
export class ClassComponent implements OnInit {
  alert:string = "alert-danger";

  prop:Object = {
    danger:false
  }
  constructor() { }

  ngOnInit() {
  }

}
