import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Necessário para o campo de busca
import { VeiculosService, Veiculo } from '../../services/veiculos.service';

@Component({
  selector: 'app-estoque',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule], 
  templateUrl: './estoque.html',
  styleUrl: './estoque.css'
})
export class Estoque implements OnInit {
  
  private veiculosService = inject(VeiculosService);
  
  todosVeiculos: Veiculo[] = [];     // Guarda tudo que veio da API
  veiculosFiltrados: Veiculo[] = []; // Guarda o que aparece na tela
  
  termoBusca: string = ''; // O que o usuário digita

  ngOnInit(): void {
    // Busca os dados assim que a página abre
    this.veiculosService.listarTodos().subscribe(dados => {
      this.todosVeiculos = dados;
      this.veiculosFiltrados = dados; // Começa mostrando tudo
    });
  }

  buscar() {
    // Lógica simples: Filtra a lista pelo nome digitado
    this.veiculosFiltrados = this.todosVeiculos.filter(carro => 
      carro.nome.toLowerCase().includes(this.termoBusca.toLowerCase())
    );
  }
}