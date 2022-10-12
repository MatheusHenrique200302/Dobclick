import { GridColumn } from './../../shared/components/grid/gridcolumn';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { GridRow } from 'src/app/shared/components/grid/gridrow';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css'],
})
export class EstoqueComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  persons: any[] = [];

  colunas = new Array<GridColumn>();
  linhas = new Array<GridRow>();

  constructor() {}

  ngOnInit(): void {

    this.inicializarColunas()

    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   pageLength: 2,
    // };

    this.persons = [
      {
        nome: 'matheus',
        idade: 21,
      },
      {
        nome: 'Rocha',
        idade: 23,
      },
    ];
    this.dtTrigger.next(null);
  }

  inicializarColunas(){
    this.colunas = new Array<GridColumn>();
    this.colunas.push(new GridColumn("#", "", 70, "Id"));
    this.colunas.push(new GridColumn("Nome", "", 70, "nome"));
    this.colunas.push(new GridColumn("Idade", "", 70, "Idade"));
  }



  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
