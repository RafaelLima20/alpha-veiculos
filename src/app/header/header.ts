// src/app/header/header.ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // <--- ESTE IMPORT É CRÍTICO para a navegação

@Component({
  selector: 'app-header', // <--- DEVE SER 'app-header'
  standalone: true,
  imports: [RouterLink], // <--- DEVE TER RouterLink AQUI
  templateUrl: './header.html',
  styleUrl: './header.css'
})
// O nome da classe deve ser 'Header'
export class Header { 
  // ...
}