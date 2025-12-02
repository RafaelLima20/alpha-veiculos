import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core'; // <--- 1. Importei ChangeDetectorRef
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { VeiculosService, Veiculo } from '../../services/veiculos.service';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detalhes.html',
  styleUrl: './detalhes.css'
})
export class DetalhesComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private veiculosService = inject(VeiculosService);
  private cd = inject(ChangeDetectorRef); // <--- 2. Injetei a ferramenta
  
  veiculo: Veiculo | undefined;

  ngOnInit(): void {
    // Pega o ID da URL
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID buscado na URL:', id); // RASTREADOR 1

    if (id) {
      this.veiculosService.buscarPorId(id).subscribe({
        next: (dados) => {
          console.log('Dados do carro chegaram:', dados); // RASTREADOR 2
          this.veiculo = dados;
          
          // <--- 3. FORÇA A TELA A ATUALIZAR
          this.cd.detectChanges(); 
        },
        error: (erro) => {
          console.error('Erro ao buscar detalhe:', erro);
        }
      });
    } else {
      console.error('Nenhum ID foi encontrado na URL!');
    }
  }

  mostrarMensagem() {
    alert('Vendedor notificado com sucesso! Entraremos em contato.');
  }
}