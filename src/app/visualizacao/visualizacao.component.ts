import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface DadosUsuario {
  nome: string;
  idade: string;
  telefone: string;
  email: string;
  endereco: string;
  numero: string;
  bairro: string;
  cidade: string;
}

@Component({
  selector: 'app-visualizacao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visualizacao.component.html',
  styleUrls: ['./visualizacao.component.css'],
})
export class VisualizacaoComponent implements OnInit {
  dadosCartao: DadosUsuario | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    const dadosSalvos = localStorage.getItem('dadosCartaoVisitas');
    if (dadosSalvos) {
      this.dadosCartao = JSON.parse(dadosSalvos);
    } else {
      this.router.navigate(['/formulario']);
    }
  }

  editarNovamente() {
    this.router.navigate(['/formulario']);
  }
}
