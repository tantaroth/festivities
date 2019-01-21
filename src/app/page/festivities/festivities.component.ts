import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: 'app-festivities',
  templateUrl: './festivities.component.html',
  styleUrls: ['./festivities.component.scss']
})
export class FestivitiesComponent implements OnInit {
  isLogged: boolean;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.isLoggedIn().subscribe(response => {
      if (response.data) {
        this.isLogged = true;
      }
    });
  }

}
