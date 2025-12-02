import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  standalone: true,
  templateUrl: './contato.html',
  styleUrl: './contato.css'
})
export class Contato {
  enviarMensagem() {
    alert('Mensagem enviada com sucesso! Responderemos em breve.');
  }
}