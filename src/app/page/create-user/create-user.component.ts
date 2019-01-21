import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase } from "@angular/fire/database";

import { MustMatch } from "../../shared/utils/must-match.validator";
import { AuthService } from "../../shared/services/auth.service";
import { User } from "../../shared/models/user";
import { Alert } from "../../shared/models/alert";

@Component({
  selector: "app-create-user",
  templateUrl: "./create-user.component.html",
  styleUrls: ["./create-user.component.scss"]
})
export class CreateUserComponent implements OnInit {
  alert: Alert;
  userRef;
  form: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private db: AngularFireDatabase
  ) {
    this.userRef = db.database.ref("users");
  }

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        name: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirmPassword: ["", Validators.required]
      },
      {
        validator: MustMatch("password", "confirmPassword")
      }
    );
  }

  onSubmit() {
    if (this.form.valid) {
      const values = this.form.value;

      this.auth
        .emailSignUp(values.email, values.password)
        .subscribe(response => {
          if (response.data) {
            const user: User = {
              uid: response.data.uid,
              displayName: response.data.displayName || values.name,
              phoneNumber: response.data.phoneNumber,
              photoURL: response.data.photoURL,
              createAt: new Date(),
              email: values.email
            };

            this.userRef.child(user.uid).set(user);

            this.router.navigate(["/"]);
          } else if (response.error) {
            // Handle Errors here.
            const error = response.error;

            this.alert = {
              color: "warn",
              icon: "error",
              label: error.message,
              sublabel: ""
            };
          }
        });
    }
  }
}
