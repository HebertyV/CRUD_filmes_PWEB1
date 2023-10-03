import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titulo = 'CRUD de Filmes';
  filmes: Filme[] = [];
  filmeSelecionado: Filme | null = null;
  novoFilme: Filme = new Filme('', '', '');

  constructor() {
    this.filmes = [
  
    ];
  }

  inserirFilme(): void {
    this.filmes.push(this.novoFilme);
    this.novoFilme = new Filme('', '', ''); 
  }

  editarFilme(filme: Filme): void {
    this.filmeSelecionado = filme;
  }

  salvarFilmeEditado(): void {
    this.filmeSelecionado = null;
  }

  removerFilme(filme: Filme): void {
    const index = this.filmes.indexOf(filme);
    if (index !== -1) {
      this.filmes.splice(index, 1);
    }
  }
}

class Filme {
  constructor(
    public titulo: string,
    public dataLancamento: string,
    public genero: string
  ) {}
}
