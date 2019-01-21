import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { ITdDataTableColumn } from '@covalent/core/data-table';
import { Festivity } from "../../shared/models/festivity";


@Component({
  selector: 'app-festivity-list',
  templateUrl: './festivity-list.component.html',
  styleUrls: ['./festivity-list.component.scss']
})
export class FestivityListComponent implements OnInit {

  festivityRef;
  festivities: Observable<any>;
  
  columns: ITdDataTableColumn[] = [
    { name: 'name',  label: 'Name' },
    { name: 'place', label: 'Place' },
    { name: 'startDate', label: 'Start Date'},
    { name: 'endDate', label: 'End Date' },
  ];

  basicData: Festivity[] = []; // see data json

  constructor(db: AngularFireDatabase) {
    this.festivityRef = db.list('festivities');
    this.festivities = this.festivityRef.valueChanges();
  }

  ngOnInit() {
  }

}
