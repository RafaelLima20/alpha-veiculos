import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Veiculo {
  id?: string;
  nome: string;
  preco: string;
  imagem: string;
  descricao?: string; // Adicionei isso caso queira colocar texto no futuro
}

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/veiculos';

  listarTodos(): Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>(this.apiUrl);
  }

  // --- NOVO MÉTODO AQUI ---
  buscarPorId(id: string): Observable<Veiculo> {
    return this.http.get<Veiculo>(`${this.apiUrl}/${id}`);
  }
}