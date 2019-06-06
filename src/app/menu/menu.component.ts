import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  public texto: string

  constructor() { }

  ngOnInit() {
    this.texto = "olá, mundo!"
  }

  clicou(){
    this.texto = "clicou"
  }

}
