import * as contador from './../contador.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducers';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {

  contador: number;
  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
    this.store.select('contador')
      .subscribe(contador => this.contador = contador);
  }

  multiplicar(){
    const accion = new contador.MultiplicarAction(5);
    this.store.dispatch(accion);
  }

  dividir(){
    const accion = new contador.DividirAction(5);
    this.store.dispatch(accion);
  }

}
