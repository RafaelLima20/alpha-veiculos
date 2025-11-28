// src/app/app.ts

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Importe os componentes
import { Header } from './header/header'; 
import { Footer } from './footer/footer'; 

@Component({
  selector: 'app-root',
  standalone: true,
  // Adicione todos os componentes no imports
  imports: [RouterOutlet, Header, Footer], 
  // O template monta o esqueleto do site
  template: `
    <app-header /> <main class="content-wrapper">
        <router-outlet /> </main>
    <app-footer /> `,
  // ... resto da configuração
})
export class App {
  // ...
}