import { Directive , ElementRef , HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(
    private elementRef:ElementRef
  ) {
    elementRef.nativeElement.style.backgroundColor = "yellow";
  }

  @Input("appResaltado") nueevoColor:string;

  @HostListener('mouseenter') mouseEntro(){
    this.resaltar( this.nueevoColor || "yellow");
  }

  private resaltar( color:string){
      this.elementRef.nativeElement.style.backgroundColor = color;
  }

}
