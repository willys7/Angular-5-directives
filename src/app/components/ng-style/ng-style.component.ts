import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [ngStyle]="{'font-size': size+'px'}">
      Hola mundo... esta es una etiqueta
    </p>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  size:number = 20;
  constructor() { }

  ngOnInit() {
  }

}
