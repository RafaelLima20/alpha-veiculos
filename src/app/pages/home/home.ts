import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core'; // <--- 1. Importe ChangeDetectorRef
import { CommonModule } from '@angular/common'; 
import { RouterLink } from '@angular/router'; 
import { VeiculosService, Veiculo } from '../../services/veiculos.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink], 
  templateUrl: './home.html', 
  styleUrl: './home.css'
})
export class Home implements OnInit {

  private veiculosService = inject(VeiculosService);
  private cd = inject(ChangeDetectorRef); // <--- 2. Injete a ferramenta aqui

  veiculosDestaque: Veiculo[] = []; 
  
  ngOnInit(): void {
    this.carregarVeiculos();
  }

  carregarVeiculos(): void {
    this.veiculosService.listarTodos().subscribe({
      next: (dados) => {
        this.veiculosDestaque = dados;
        
        // <--- 3. O PULO DO GATO ESTÁ AQUI:
        this.cd.detectChanges(); // Força o Angular a atualizar a tela na hora!
        
        console.log('Dados atualizados na tela!');
      },
      error: (erro) => {
        console.error('Erro ao buscar carros:', erro);
      }
    });
  }
}