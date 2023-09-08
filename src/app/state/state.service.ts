import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  titulo: BehaviorSubject<string> = new BehaviorSubject('Login');

  constructor() { }

  get getTitulo(){
    return this.titulo.asObservable();
  }

  set seTitulo(titulo:string){
    this.titulo.next(titulo);
  }
}
