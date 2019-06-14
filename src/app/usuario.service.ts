import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  public listaUsuario(): Usuario[]{
    return [
      {
        nome: 'Reginalds',
        email: 'reginas.pp@gmail.com'
      },
      {
        nome: 'Everaldo',
        email: 'everas.mm@gmail.com'
      },
      {
        nome: 'Nildo',
        email: 'nildao.gg@gmail.com'
      },
      {
        nome: 'Antero',
        email: 'tetao.tt@gmail.com'
      }
    ]
  }

}
