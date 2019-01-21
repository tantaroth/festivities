import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../../shared/services/auth.service";
import { User } from "../../shared/models/user";
import { Alert } from "../../shared/models/alert";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"]
})
export class LoginFormComponent implements OnInit {
  alert: Alert;
  form: FormGroup;

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8)
      ])
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const values = this.form.value;

      this.auth
        .emailSignIn(values.email, values.password)
        .subscribe(response => {
          if (response) {
            if (response.data) {
              const user: User = response.data;

              if (user) {
                this.router.navigate(["/"]);
              }
            } else if (response.error) {
              const error = response.error;

              this.alert = {
                color: "warn",
                icon: "error",
                label: error.message,
                sublabel: ""
              };
            }
          }
        });
    }
  }
}
