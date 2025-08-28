import { Component } from '@angular/core';
import * as emailjs from 'emailjs-com';
import { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  nombre: string = '';
  email: string = '';
  mensaje: string = '';

   constructor() {
    // Inicializa EmailJS con tu clave pública
    emailjs.init('EC21HTNE0PH36sjXt');
  }

  sendEmail() {
    if (!this.nombre || !this.email || !this.mensaje) {
      alert('Por favor completa todos los campos.');
      return;
    }

    const templateParams = {
      from_name: this.nombre,
      from_email: this.email,
      message: this.mensaje
    };

    emailjs.send('service_6nqeqim', 'template_6zjqqem', templateParams)
      .then((response) => {
        console.log('Correo enviado!', response.status, response.text);
        alert('Mensaje enviado correctamente.');
        this.nombre = '';
        this.email = '';
        this.mensaje = '';
      }, (err) => {
        console.error('Error al enviar el correo:', err);
        alert('Ocurrió un error, intenta nuevamente.');
      });
  }
}
