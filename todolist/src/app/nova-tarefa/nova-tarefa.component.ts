import { Tarefa } from './../models/Tarefa';
import { TarefaServiceService } from './../services/tarefaService.service';
import { Component, Output } from "@angular/core";


@Component({
  selector: 'app-nova-tarefa',
  templateUrl: './nova-tarefa.component.html',
  styleUrls: ['./nova-tarefa.component.scss']

})

export class NovaTarefaComponent {


  modelo:Tarefa= {
    nomeDaTarefa: "",

  }


  constructor(private service: TarefaServiceService){}


  newTask(): void {

    this.service.newTask(this.modelo).subscribe(() => {
      location.reload();
      console.log(this.modelo)
    });

    this.cleanInput();

  }
  cleanInput() {
    this.modelo.nomeDaTarefa = '';
  }


}
