import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
public url ='https://rickandmortyapi.com/api/character'
  constructor(
    public _http: HttpClient
  ) { }

  getCharacters(): Observable<any>{
    return this._http.get(this.url);
  }
}
