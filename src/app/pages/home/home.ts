// src/app/pages/home/home.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necessário para usar *ngFor

// Define a estrutura de um veículo para garantir tipagem forte
interface Veiculo {
  nome: string;
  preco: string;
  imagem: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  // IMPORTANTE: Adiciona o CommonModule para que o *ngFor funcione no HTML
  imports: [CommonModule], 
  // APONTA PARA SEU ARQUIVO HTML
  templateUrl: './home.html', 
  styleUrl: './home.css'
})
export class Home implements OnInit {

  // Lista de veículos (Array de objetos) para exibição dinâmica
  veiculosDestaque: Veiculo[] = [
    // ATENÇÃO: Verifique se a extensão (.jpeg) e o nome do arquivo estão EXATOS
    { nome: 'FIAT ARGO 2023', preco: 'R$ 65.000,00', imagem: 'assets/fiatargo2023.jpg' },
    { nome: 'Volkwagem GOL 2022', preco: 'R$ 40.990', imagem: 'assets/vwgol2022.jpg' },
    { nome: 'Chevrolet ONIX LT 2024', preco: 'R$ 80.990', imagem: 'assets/gmonix2024.jpg' },
    // Acrescentando mais carros de exemplo:
    { nome: 'TOYOTA COROLLA 2020', preco: 'R$ 95.000,00', imagem: 'assets/corolla2020.jpg' }, 
    { nome: 'FORD KA 2018', preco: 'R$ 35.000,00', imagem: 'assets/fordka2018.jpg' } 
  ];
  
  // Implementação do método do ciclo de vida
  ngOnInit(): void {
    // Código de inicialização, se necessário
  }

  // Método chamado pelo botão "Detalhes" no HTML
  mostrarDetalhes(nomeCarro: string): void {
    alert(`Mostrando mais detalhes sobre o ${nomeCarro}...`);
  }
}