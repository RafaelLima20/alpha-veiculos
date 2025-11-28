import { Routes } from '@angular/router';

// 1. Importe todos os componentes de página que você criou.
// O nome da classe gerada pelo Angular CLI é o nome que usamos no import.
import { Home } from './pages/home/home'; 
import { Buscar } from './pages/buscar/buscar';
import { Financiamento } from './pages/financiamento/financiamento'; // Aponta para a pasta e o arquivo .ts
import { Sobre } from './pages/sobre/sobre';
import { Contato } from './pages/contato/contato';

export const routes: Routes = [
    // Rota Padrão (/) - Página Inicial
    { path: '', component: Home, title: 'Alpha Veículos - Início' },
    
    // Rota /buscar - Página de Estoque e Busca
    { path: 'buscar', component: Buscar, title: 'Alpha Veículos - Estoque' },

    // Rota /financiamento
    { path: 'financiamento', component: Financiamento, title: 'Alpha Veículos - Financiamento' },

    // Rota /sobre
    { path: 'sobre', component: Sobre, title: 'Alpha Veículos - Sobre Nós' },

    // Rota /contato
    { path: 'contato', component: Contato, title: 'Alpha Veículos - Contato' },

    // Rota Curinga: Redireciona qualquer URL não mapeada para a Home
    { path: '**', redirectTo: '' } 
];