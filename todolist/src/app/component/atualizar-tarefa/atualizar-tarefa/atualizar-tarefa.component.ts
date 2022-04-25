import { Tarefa } from './../../../models/Tarefa';
import { Component, OnInit } from '@angular/core';
import { TarefaServiceService } from 'src/app/services/tarefaService.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-atualizar-tarefa',
  templateUrl: './atualizar-tarefa.component.html',
  styleUrls: ['./atualizar-tarefa.component.scss']
})
export class AtualizarTarefaComponent implements OnInit {

  task: Tarefa = {
  nomeDaTarefa: '',
  };

  constructor(
    private service: TarefaServiceService,
    private router: Router,
    private id: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const takeId = this.id.snapshot.paramMap.get('id');
    this.service.readById(String(takeId)).subscribe((task) => {
      this.task = task;
     });

  }

  updateTask(): void {
    this.service.updateTask(this.task).subscribe(() => {
     console.log('Tarefa Atualizada')
      location.reload();
    });
  }

  cancel(): void {
    this.router.navigate(['']);
  }

}
