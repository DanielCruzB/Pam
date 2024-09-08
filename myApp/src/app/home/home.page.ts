import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {
  username: string = '';
  viajes: any[] = []; // Agrega una propiedad para almacenar los viajes disponibles

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'] || 'Usuario'; // Valor por defecto si no se proporciona el nombre de usuario
    });
  }

  ngAfterViewInit() {
    // Activar animaciones después de que la vista se haya cargado
    setTimeout(() => {
      document.querySelector('.action-card')?.classList.add('show');
      document.querySelector('.info-card')?.classList.add('show');
    }, 100);
  }

  async programarViaje() {
    const alert = await this.alertController.create({
      header: 'Programar viaje',
      inputs: [
        {
          name: 'destino',
          type: 'text',
          placeholder: 'Destino'
        },
        {
          name: 'costo',
          type: 'number',
          placeholder: 'Costo por persona'
        },
        {
          name: 'asientos',
          type: 'number',
          placeholder: 'Asientos disponibles'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Programar',
          handler: (data) => {
            console.log('Viaje programado:', data);
            // Aquí iría la lógica para guardar el viaje programado
          }
        }
      ]
    });

    await alert.present();
  }

  async buscarViaje() {
    // Simulación de búsqueda de viajes
    this.viajes = [
      { destino: 'Centro', costo: 5000, asientos: 2 },
      { destino: 'Las Condes', costo: 7000, asientos: 1 },
      { destino: 'Ñuñoa', costo: 6000, asientos: 3 }
    ];

    const alert = await this.alertController.create({
      header: 'Viajes Disponibles',
      message: this.viajes.map(viaje => 
        `Destino: ${viaje.destino}, Costo: $${viaje.costo}, Asientos: ${viaje.asientos}`
      ).join('\n'),
      buttons: ['OK']
    });

    await alert.present();
  }

  // Función para redirigir al login (Iniciar Sesión)
  irALogin() {
    this.router.navigate(['/login']);  // Redirige a la página de inicio de sesión (login.page.html)
  }

  // Función para cerrar sesión
  cerrarSesion() {
    // Aquí puedes agregar lógica para limpiar datos de la sesión
    this.router.navigate(['/login']);  // Redirige nuevamente al login después de cerrar sesión
  }
}
