import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styles: []
})
export class ClassComponent implements OnInit {
  alert:string = "alert-danger";
  loading:boolean = false;


  prop:Object = {
    danger:false
  }
  constructor() { }

  ngOnInit() {
  }

  execute(){
    this.loading = true;
    setTimeout(() => this.loading = false, 3000)
  }

}
