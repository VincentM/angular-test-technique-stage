import { Injectable } from '@angular/core';

import { Ligne } from './ligne';
import { LIGNES } from './mock-lignes';

import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LigneService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  /**getLignes(): Observable<Ligne[]> {
  this.messageService.add('LigneService: fetched lignes');
  return of (LIGNES);
  }*/


  getLignes (): Observable<any> {
  return this.http.get("https://api-ratp.pierre-grimaud.fr/v3/lines/metros")
}

}
