import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

   mostrarCV() {
  Swal.fire({
    title: 'Currículum',
    text: 'Haz click aquí para descargar mi CV en formato PDF',
    icon: 'info',
    showCancelButton: true,
    confirmButtonText: '📄 Descargar',
    cancelButtonText: '❌ Cancelar',
    confirmButtonColor: '#06b6d4',
  }).then((result) => {
    if (result.isConfirmed) {
      const link = document.createElement('a');
      link.href = './../../assets/Lautaro Avila ult Act CV.pdf';   // ruta de tu CV
      link.download = 'Curriculum_Lautaro_Avila.pdf'; // nombre con el que se guarda
      link.click();
    }
  });
}

}
