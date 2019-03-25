import { Directive, Input, ElementRef } from '@angular/core';
import { D3Service } from '../services/d3.service';

@Directive({
  selector: '[wbZoomable]',
})
export class ZoomableDirective {
  @Input('wbZoomable') wbZoomable: ElementRef;

  constructor(private d3Service: D3Service, private _element: ElementRef) {}

  ngOnInit() {
    this.d3Service.applyZoomableBehaviour(
      this.wbZoomable,
      this._element.nativeElement,
    );
  }
}
