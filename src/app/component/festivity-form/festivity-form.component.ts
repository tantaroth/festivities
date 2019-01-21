import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase } from '@angular/fire/database';

import { Festivity } from "../../shared/models/festivity";
import { Alert } from "../../shared/models/alert";

@Component({
  selector: "app-festivity-form",
  templateUrl: "./festivity-form.component.html",
  styleUrls: ["./festivity-form.component.scss"]
})
export class FestivityFormComponent implements OnInit {
  alert: Alert;
  form: FormGroup;
  festivityRef;

  constructor(
    db: AngularFireDatabase
  ) {
    this.festivityRef = db.database.ref("festivities");
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      place: new FormControl(null, [Validators.required]),
      startDate: new FormControl(null, [Validators.required]),
      endDate: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const festivity: Festivity = this.form.value;

      this.festivityRef.push(festivity);
    }
  }
}
