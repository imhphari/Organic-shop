import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User>;

  constructor(private afFireAuth: AngularFireAuth,private route: ActivatedRoute) {
    this.user$ = afFireAuth.authState;
  }

  login(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);


    this.afFireAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider);
  }

  logout() {

    this.afFireAuth.auth.signOut();
  }

}