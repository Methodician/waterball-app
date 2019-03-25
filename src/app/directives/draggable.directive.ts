import { Directive, Input, ElementRef } from '@angular/core';
import { Node, ForceDirectedGraph } from '../models';
import { D3Service } from '../services/d3.service';

@Directive({
  selector: '[wbDraggable]',
})
export class DraggableDirective {
  @Input('wbDraggable') wbDraggable: Node;
  @Input('draggableInGraph') draggableInGraph: ForceDirectedGraph;

  constructor(private d3Service: D3Service, private _element: ElementRef) {}

  ngOnInit() {
    this.d3Service.applyDraggableBehaviour(
      this._element.nativeElement,
      this.wbDraggable,
      this.draggableInGraph,
    );
  }
}
