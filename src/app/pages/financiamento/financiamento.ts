import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-financiamento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './financiamento.html',
  styleUrl: './financiamento.css'
})
export class Financiamento {
  simular() {
    alert('Simulação enviada para o banco! Aguarde nosso contato.');
  }
}