import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class SecurityService {
  user$ = new BehaviorSubject(undefined);

  constructor(private router: Router) {
  }

  get isAuthenticated(): boolean {
    const user = window.sessionStorage.getItem('access_token');
    if (!this.user$.value) {
      this.user$.next(user);
    }
    return !!user;
  }

  signin({username}: { username: string }): void {
    window.sessionStorage.setItem('access_token', username);
    this.user$.next(username);
    this.router.navigate(['/']);
  }
}
