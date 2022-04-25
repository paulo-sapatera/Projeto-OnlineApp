import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/models/Tarefa';
import { TarefaServiceService } from 'src/app/services/tarefaService.service';

@Component({
  selector: 'app-concluidas',
  templateUrl: './concluidas.component.html',
  styleUrls: ['./concluidas.component.scss']
})
export class ConcluidasComponent implements OnInit {

  adicionandosConcluidas: Tarefa[] = [];

  constructor(private service: TarefaServiceService) { }

  desmarcar(id: Number) {
    this.service.desmarcarConcluida(id).subscribe(
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
    this.service.readConcluidas().subscribe((adicionandos: Tarefa[]) => {
      this.adicionandosConcluidas = adicionandos;
    })
  }

}
