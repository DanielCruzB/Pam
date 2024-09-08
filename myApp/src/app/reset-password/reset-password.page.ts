import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {
  username: string = '';

  constructor(private router: Router) {}

  recuperar() {
    if (this.username) {
      // En una aplicación real, aquí enviarías una solicitud al backend
      // Por ahora, solo mostraremos una alerta y navegaremos de vuelta al login
      alert('Se han enviado instrucciones para restablecer la contraseña a tu correo electrónico.');
      this.router.navigate(['/login']);
    } else {
      alert('Por favor, ingresa tu nombre de usuario');
    }
  }
}