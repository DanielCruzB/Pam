import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  register() {
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    if (this.username && this.email && this.password) {
      // Aquí iría la lógica para registrar al usuario en un backend real
      alert('Usuario registrado con éxito');
      this.router.navigate(['/login']);
    } else {
      alert('Por favor, completa todos los campos');
    }
  }
}