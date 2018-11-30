import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/AlertifyService.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router,
    private alertify: AlertifyService) {}
  canActivate(): | boolean {
    if (this.auth.tokenCheck()) {
      return true;
    }

    this.alertify.error('You have no permission to access. Please login first before you go to that address');

    this.router.navigate(['/home']);

    return false;
  }
}
