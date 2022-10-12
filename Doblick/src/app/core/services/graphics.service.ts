import { ResponseModel } from './../models/Response.model';
import { map } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GraphicsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getDadosGraficos(): Observable<any> {
    return this.http
      .post<ResponseModel<any>>(this.apiUrl + '/graficos/obterDadosGraficos', {"usuarioId": 13})
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  // public ListarJogadores() {
  //   return this.http.post(`${this.apiUrl}/Jogadores/ListarJogadores`,{})
  //     .pipe(
  //       map((response) => {
  //         return response;
  //       })
  //     );
  // }
}
