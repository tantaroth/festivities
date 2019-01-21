import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: "app-layout-public",
  templateUrl: "./public.component.html",
  styleUrls: ["./public.component.scss"]
})
export class PublicComponent implements OnInit {
  isLogged: boolean;
  email: string;
  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit() {
    this.auth.isLoggedIn().subscribe(response => {
      if (response.data) {
        this.isLogged = true;
        this.email = response.data.email;
      }
    });
  }

  logout() {
    this.auth.logout().subscribe(
      () => {
        this.router.navigate(['/']);
      }
    );
  }
}
