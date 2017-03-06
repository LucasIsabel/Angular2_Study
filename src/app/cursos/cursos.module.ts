import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoComponent } from './curso/curso.component';
import { CursosDetalheComponent } from './cursos-detalhe/cursos-detalhe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CursoComponent, CursosDetalheComponent],
  exports:[CursoComponent]
})
export class CursosModule { }
