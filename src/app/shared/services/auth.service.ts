import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { Observable } from "rxjs";

import { User } from "../models/user";

interface Response {
  status: boolean;
  data?: any;
  error?: any;
}

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  isLoggedIn(): Observable<Response> {
    return new Observable(observer => {
      observer.next({
        status: false
      });
      this.afAuth.authState.subscribe(data => {
        observer.next({
          status: true,
          data
        });
      });
    });
  }

  emailSignUp(email: string, password: string): Observable<Response> {
    return new Observable(observer => {
      observer.next({
        status: false
      });
      this.afAuth.auth
        .createUserWithEmailAndPassword(email, password)
        .then(data => {
          const user: User = this.formatResponseUser(data);

          observer.next({
            status: true,
            data: user
          });
        })
        .catch(error => {
          observer.next({
            status: false,
            error
          });
        });
    });
  }

  emailSignIn(email: string, password: string): Observable<Response> {
    return new Observable(observer => {
      observer.next({
        status: false
      });
      this.afAuth.auth
        .signInWithEmailAndPassword(email, password)
        .then(data => {
          const user: User = this.formatResponseUser(data);

          observer.next({
            status: true,
            data: user
          });
        })
        .catch(error => {
          observer.next({
            status: false,
            error
          });
        });
    });
  }

  logout(): Observable<Response> {
    return new Observable(observer => {
      observer.next({
        status: false
      });
      this.afAuth.auth
        .signOut()
        .then(() => {
          observer.next({
            status: true
          });
        })
        .catch(error => {
          observer.next({
            status: false,
            error
          });
        });
    });
  }

  formatResponseUser(data): User {
    const emails = [];

    emails.push({
      email: data.user.email,
      public: false,
      type: "main"
    });

    const user: User = {
      uid: data.user.uid,
      displayName: data.user.displayName,
      phoneNumber: data.user.phoneNumber,
      photoURL: data.user.photoURL,
      createAt: new Date(),
      email: data.user.email
    };

    return user;
  }
}
