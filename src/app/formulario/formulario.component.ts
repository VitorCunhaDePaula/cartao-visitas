import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  dadosUsuario = {
    nome: '',
    idade: '',
    telefone: '',
    email: '',
    endereco: '',
    numero: '',
    bairro: '',
    cidade: '',
  };

  constructor(private router: Router) {}

  enviarFormulario() {
    if (
      !this.dadosUsuario.nome ||
      !this.dadosUsuario.idade ||
      !this.dadosUsuario.telefone ||
      !this.dadosUsuario.email ||
      !this.dadosUsuario.endereco ||
      !this.dadosUsuario.numero ||
      !this.dadosUsuario.bairro ||
      !this.dadosUsuario.cidade
    ) {
      alert('Por favor, preencha todos os campos!');
      return;
    }
    if (isNaN(Number(this.dadosUsuario.idade))) {
      alert('Idade deve ser um número!');
      return;
    }

    localStorage.setItem(
      'dadosCartaoVisitas',
      JSON.stringify(this.dadosUsuario)
    );
    this.router.navigate(['/visualizacao']);
  }
}
