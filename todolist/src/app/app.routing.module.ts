import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AtualizarTarefaComponent } from './component/atualizar-tarefa/atualizar-tarefa/atualizar-tarefa.component';


const routes: Routes = [{

  path: "update/:id",
  component: AtualizarTarefaComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
