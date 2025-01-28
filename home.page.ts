import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonLabel, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonLabel, IonInput],
})
export class HomePage implements OnInit {
  email: string = '';
  password: string = '';

  constructor() {}

  ngOnInit(): void {
    console.log("hola mundo");
    let numero = 0;

    numero = 5;
    numero = 7;
    numero = numero * 2;
    numero = numero / 3;

    console.log("wazaaaa");
    console.log("ggs");
    console.log("Gogueta");
    console.log("KAKAROTO");
  }

  login() {
    if (this.email && this.password) {
      console.log('Inicio de sesión con correo:', this.email, 'y contraseña:', this.password);
      // Aquí podrías agregar lógica para autenticar al usuario (por ejemplo, con un servicio de autenticación)
    } else {
      console.log('Por favor, completa ambos campos.');
    }
  }
}
