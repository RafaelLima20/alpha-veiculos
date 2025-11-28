// src/app/pages/buscar/buscar.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [],
  templateUrl: './buscar.html',
  styleUrl: './buscar.css'
})
export class Buscar {

  buscarVeiculos(marca: string, modelo: string, ano: string): void {
    // Esta lógica é executada quando o formulário é submetido
    alert(`Buscando veículos com os seguintes filtros:\nMarca: ${marca}\nModelo: ${modelo}\nAno: ${ano}`);

    // Em um projeto real, você faria uma chamada a uma API aqui
  }
}
