import { Tarefa } from './../models/Tarefa';
import { Component, Input, OnInit } from '@angular/core';
import { TarefaServiceService } from '../services/tarefaService.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  adicionandos: Tarefa[] = [];

  constructor(private service: TarefaServiceService) { }

  concluir(id: Number) {
    this.service.marcarConcluida(id).subscribe(
      (erro => {
        console.log(erro);
      })
    )
    setTimeout(() => {
      location.reload();

    }, 300)
  }

  deletar(id: Number) {
    this.service.deleteTarefa(id).subscribe(
      (erro => {
        console.log(erro);
      })
    )
    setTimeout(() => {
      location.reload();

    }, 300)
  }

  ngOnInit() {
    this.service.read().subscribe((adicionandos: Tarefa[]) => {
      this.adicionandos = adicionandos;
    })
  }

}
