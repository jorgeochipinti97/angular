import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters.service';

declare var $: any;

@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  public filtro: boolean = true
  public characters: Array<any> = []
  public charactersAlive: Array<any> = []
  public charactersDead: Array<any> = []
  public charactersUnknown: Array<any> = []
  public personajes: Array<any> = []
  filterCharacters = ''
  opcionSelecionado: string = 'all'
  varSelection: string = ''
  constructor(
    private charactersService: CharactersService
  ) {
    this.charactersService.getCharacters().subscribe(res => {
      this.characters = res.results
    })

  }

  ngOnInit(): void {

    $('.slider').bxSlider({
      auto: true,
      autoControls: true,
      stopAutoOnClick: true,
      pager: true,
      slideWidth: 450
    })
  }

  capturar() {
    this.characters.forEach(e => {
      if (e.status == 'Alive') {
        this.charactersAlive = this.characters.filter(function (e) {
          return e.status == 'Alive'
        })
        console.log(this.charactersAlive)

      } else if (e.status == 'Dead') {

        this.charactersDead = this.characters.filter((e)=>{
            return e.status =='Dead'
        })
      }
    })

    if (this.opcionSelecionado == 'all') {
      this.personajes = this.characters
      this.filtro = false
    } else if (this.opcionSelecionado == 'Alive') {
      this.personajes = this.charactersAlive
      this.filtro = false
    } else if (this.opcionSelecionado == 'Dead') {
      this.personajes = this.charactersDead
      this.filtro = false
    }
  }

}
