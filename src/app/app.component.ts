import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
@Component({
  selector: 'wb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'WaterBall';
  testData: Observable<any[]>;
  displayedColumns: string[] = [
    'timestamp', // unix seconds since epoch
    'distance', // cm
    'lux', // lux
    'red', // not clear on units
    'green',
    'blue',
    'humidity', // relative %
    'temperature', // celsius
    'pressure', // millibars
    'freeheap',
    'uptime',
  ];

  constructor(db: AngularFireDatabase) {
    const query = db.list('test/data', ref => ref.limitToLast(50));
    this.testData = query.valueChanges();
  }
}
