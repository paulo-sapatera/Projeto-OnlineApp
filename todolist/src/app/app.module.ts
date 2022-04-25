import { HomeComponent } from './component/home/home/home.component';
import { AtualizarTarefaComponent } from './component/atualizar-tarefa/atualizar-tarefa/atualizar-tarefa.component';
import { ConcluidasComponent } from './concluidas.component/concluidas/concluidas.component';
import { NovaTarefaComponent } from './nova-tarefa/nova-tarefa.component';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ExtratoComponent } from './extrato/extrato.component';
import { HeaderComponent } from './component/header/header.component';
import { RodapeComponent } from './component/rodape/rodape.component';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePT from '@angular/common/locales/pt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app.routing.module';
registerLocaleData(localePT);



@NgModule({
  declarations: [
    AppComponent,
    NovaTarefaComponent,
    ExtratoComponent,
    HeaderComponent,
    RodapeComponent,
    ConcluidasComponent,
    AtualizarTarefaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [{provide:LOCALE_ID, useValue:'pt-br'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
