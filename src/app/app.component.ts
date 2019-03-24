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
  constructor(db: AngularFireDatabase) {
    this.testData = db.list('test/data').valueChanges();
  }
}
