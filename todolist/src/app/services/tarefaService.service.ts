import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarefa } from '../models/Tarefa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefaServiceService {

  private readonly url = environment["backendUrl"];

  constructor(private http: HttpClient) {
}

read(): Observable<Tarefa[]> {
  return this.http.get<Tarefa[]>(this.url);
}

readConcluidas(): Observable<Tarefa[]> {
  return this.http.get<Tarefa[]>(`${this.url}/recuperarConcluidas`);
}

marcarConcluida(id: Number){
  return this.http.put(`${this.url}/marcarTarefa/${id}`, id);
}

desmarcarConcluida(id: Number){
  return this.http.put(`${this.url}/desmarcarTarefa/${id}`, id);
}

readById(id: string): Observable<Tarefa>{
  return this.http.get<Tarefa>(`${this.url}/${id}`)

}

newTask(newTask: Tarefa): Observable<Tarefa> {
  return this.http.post<Tarefa>(this.url, newTask);
}

updateTask(task: Tarefa): Observable<Tarefa>{
  const url = `${this.url}/${task.id}`
  return this.http.put<Tarefa>(url, task)
}

deleteTarefa(id: Number){
  return this.http.delete(`${this.url}/delete/${id}`);
}

}
