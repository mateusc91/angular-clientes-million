import { Component, OnInit } from '@angular/core';
import { Sessao } from 'src/app/services/Sessao';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  sair(){
    Sessao.removeCliente();
  }

}
