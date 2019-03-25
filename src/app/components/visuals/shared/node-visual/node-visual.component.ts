import { Component, Input } from '@angular/core';
import { Node } from '../../../../models';

@Component({
  selector: '[wb-node-visual]',
  templateUrl: './node-visual.component.html',
  styleUrls: ['./node-visual.component.scss'],
})
export class NodeVisualComponent {
  @Input('wb-node-visual') node: Node;
}
