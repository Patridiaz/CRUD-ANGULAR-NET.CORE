import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/interfaces/comentario';

@Component({
  selector: 'app-list-comentarios',
  templateUrl: './list-comentarios.component.html',
  styleUrls: ['./list-comentarios.component.css']
})
export class ListComentariosComponent implements OnInit {

  listComentarios: Comentario[] = [
    { titulo: 'Angular', creador: 'Juan', fechaCreacion: new Date(), texto:'Framework para crear'},
    { titulo: 'React', creador: 'Nicolas', fechaCreacion: new Date(), texto:'Libreria para crear'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
