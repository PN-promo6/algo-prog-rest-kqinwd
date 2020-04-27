import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  // Albums
  public getAlbums(): void {
    this.httpClient.get('http://localhost:3000/albums')
      .subscribe(
        res => {
          /*Si le serveur retourne un succès, on a dans "res" la donnée envoyée par le serveur*/
          console.log(res);
        },
        error => {
          /*Si le serveur retourne une erreur, on dans "error" le descriptif de l'erreur (code de status, message de status)*/
          console.log(error);
        }
      );
  }

  // Membres du groupe
  public getMembers(): void {
    this.httpClient.get('http://localhost:3000/members')
      .subscribe(
        res => {
          console.log(res);
        },
        error => {
          console.log(error);
        }
      );
  }

  // Concerts
  public getConcertTours(): void {
    this.httpClient.get('http://localhost:3000/concertTours')
      .subscribe(
        res => {
          console.log(res);
        },
        error => {
          console.log(error);
        }
      );
  }

  // Labels
  public getLabels(): void {
    this.httpClient.get('http://localhost:3000/labels')
      .subscribe(
        res => {
          console.log(res);
        },
        error => {
          console.log(error);
        }
      );
  }
}
