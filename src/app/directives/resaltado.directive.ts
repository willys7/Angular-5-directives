import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  
  constructor(private el:ElementRef) {
    console.log("Works")
    // el.nativeElement.style.backgroundColor = "Yellow"
  }

  @Input("appResaltado") newColor:string;

  @HostListener('mouseenter') mouseEntro(){
    this.resaltar(this.newColor || "yellow");
  }
  @HostListener('mouseleave') mouseFuera(){
    this.resaltar(null);
  }

  private resaltar(color:string){
    this.el.nativeElement.style.backgroundColor = color
  }
}
