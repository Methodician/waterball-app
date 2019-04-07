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
    'timestamp',
    'distance',
    'lux',
    'red',
    'green',
    'blue',
    'humidity',
    'temperature',
    'pressure',
    'freeheap',
    'uptime',
  ];

  // {
  //   -"blue": 21,
  //   -"distance": 53,
  //   -"freeheap": 265868,
  //   -"green": 35,
  //   -"humidity": 22,
  //   -"lux": 21,
  //   -"pressure": 1017,
  //   -"red": 58,
  //   -"temperature": 22,
  //   -"timestamp": 1552881682,
  //   -"uptime": 254
  // },
  constructor(db: AngularFireDatabase) {
    const query = db.list('test/data', ref => ref.limitToLast(50));
    this.testData = query.valueChanges();
  }
}
