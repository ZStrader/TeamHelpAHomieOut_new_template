import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  coursesObservable: Observable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.coursesObservable = this.getCourses('/courses');
  }

  getCourses(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

}
