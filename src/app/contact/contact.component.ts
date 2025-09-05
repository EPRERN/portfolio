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
    // emailjs.init('EC21HTNE0PH36sjXt');
  }

sendEmail() {
  if (!this.nombre || !this.email || !this.mensaje) {
    alert('Por favor completa todos los campos.');
    return;
  }

  const destinatario = "lautiavila96@gmail.com";
  const asunto = encodeURIComponent("Nuevo mensaje de contacto");
  const cuerpo = encodeURIComponent(
    `\n${this.mensaje}`
  );

  const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${destinatario}&su=${asunto}&body=${cuerpo}`;

  window.open(url, "_blank"); // 👈 abre Gmail en una pestaña nueva
}

}
