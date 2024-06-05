import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";

@Directive({
    selector:'[setBackground]'
})
export class SetBackground{
    // private element : ElementRef;
    // private renderer : Renderer2;
    // @Input() backColor : String = '#36454F';
    // @Input() textColor : string = 'white';

    @Input('setBackground') changeTextAndBackClor : {backColor : String , textColor : string};

    constructor(private element : ElementRef,private renderer : Renderer2){
            // this.element = element;
            // this.renderer = renderer;
    }

    ngOnInit(){
        // this.element.nativeElement.style.backgroundColor = '#36454F'
        // this.element.nativeElement.style.color = 'white'

        this.renderer.setStyle(this.element.nativeElement,'background',this.changeTextAndBackClor.backColor)
        this.renderer.setStyle(this.element.nativeElement,'color',this.changeTextAndBackClor.textColor)

        // this.renderer.setAttribute(this.element.nativeElement,'title','This is example title')
    }
}