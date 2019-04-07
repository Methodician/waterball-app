import { Component } from '@angular/core';
// import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
// import { Observable } from 'rxjs';
import APP_CONFIG from './app.config';
import { Node, Link } from './models/index';

@Component({
  selector: 'wb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // title = 'WaterBall';
  // testData: Observable<any[]>;
  // constructor(db: AngularFireDatabase) {
  //   this.testData = db.list('test/data').valueChanges();
  // }

  nodes: Node[] = [];
  links: Link[] = [];

  constructor() {
    const N = APP_CONFIG.N,
      getIndex = number => number - 1;

    // constructing the nodes array
    for (let i = 1; i <= N; i++) {
      this.nodes.push(new Node(i));
    }

    for (let i = 1; i <= N; i++) {
      for (let m = 2; i * m <= N; m++) {
        /** increasing connections toll on connecting nodes */
        this.nodes[getIndex(i)].linkCount++;
        this.nodes[getIndex(i * m)].linkCount++;

        /** connecting the nodes before starting the simulation */
        this.links.push(new Link(i, i * m));
      }
    }
  }
}
