import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { LayoutModule } from "./layout/layout.module";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { environment } from "../environments/environment";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./page/home/home.component";
import { NotFoundComponent } from "./page/not-found/not-found.component";
import { LoginFormComponent } from "./component/login-form/login-form.component";
import { LoginComponent } from "./page/login/login.component";
import { CreateUserComponent } from "./page/create-user/create-user.component";

import { AuthService } from "./shared/services/auth.service";
import { FestivitiesComponent } from "./page/festivities/festivities.component";
import { FestivityListComponent } from "./component/festivity-list/festivity-list.component";
import { FestivityFormComponent } from "./component/festivity-form/festivity-form.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    LoginFormComponent,
    LoginComponent,
    CreateUserComponent,
    FestivitiesComponent,
    FestivityListComponent,
    FestivityFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase, "festivities"), // imports firebase/app needed for everything
    AngularFireDatabaseModule,
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
