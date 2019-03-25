import { Component, Input } from '@angular/core';
import { Link } from '../../../../models';

@Component({
  selector: '[wb-link-visual]',
  templateUrl: './link-visual.component.html',
  styleUrls: ['./link-visual.component.scss'],
})
export class LinkVisualComponent {
  @Input('wb-link-visual') link: Link;
}
