import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-user-new',
  template: `
    <p>
      user-new works!
    </p>
  `,
  styles: []
})
export class UserNewComponent implements OnInit {

  constructor(private route:ActivatedRoute) { 
    this.route.parent.params.subscribe(params =>{
      console.log(params);
    })
  }

  ngOnInit() {
  }

}
