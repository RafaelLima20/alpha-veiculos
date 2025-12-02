import { Routes } from '@angular/router';

// 1. Importe os componentes
import { Home } from './pages/home/home';
import { Estoque } from './pages/estoque/estoque'; // <--- Adicionamos o NOVO
import { Financiamento } from './pages/financiamento/financiamento';
import { Sobre } from './pages/sobre/sobre';
import { Contato } from './pages/contato/contato';
import { DetalhesComponent } from './pages/detalhes/detalhes';

export const routes: Routes = [
    // Rota Padrão (/) - Página Inicial
    { path: '', component: Home, title: 'Alpha Veículos - Início' },

    // --- MUDANÇA AQUI ---
    // A rota agora chama 'estoque' e usa o componente Estoque
    { path: 'estoque', component: Estoque, title: 'Alpha Veículos - Estoque' },

    // Rota /financiamento
    { path: 'financiamento', component: Financiamento, title: 'Alpha Veículos - Financiamento' },

    // Rota /sobre
    { path: 'sobre', component: Sobre, title: 'Alpha Veículos - Sobre Nós' },

    // Rota /contato
    { path: 'contato', component: Contato, title: 'Alpha Veículos - Contato' },

    // Rota de Detalhes (Dinâmica)
    { path: 'detalhes/:id', component: DetalhesComponent, title: 'Alpha Veículos - Detalhes' },

    // Rota Curinga
    { path: '**', redirectTo: '' }
];