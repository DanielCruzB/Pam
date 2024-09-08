import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  ingresar() {
    if (this.username && this.password) {
      this.router.navigate(['/home'], { queryParams: { username: this.username } });
    } else {
      alert('Por favor, ingresa tanto el nombre de usuario como la contraseña');
    }
  }

  restablecerContrasena() {
    this.router.navigate(['/reset-password']);
  }
}
