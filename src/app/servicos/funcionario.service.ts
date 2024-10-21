import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private apiUrl = 'https://localhost:7283/api/Funcionario';

  constructor(private http: HttpClient) { }

  enviarFuncionario(data: any): Observable<any> {
    const caminhoComEndpoint = `${this.apiUrl}/AdicionarFuncionario`;  
    return this.http.post(caminhoComEndpoint, data);
  }

  listarFuncionarios(): Observable<any> {
    return this.http.get(`${this.apiUrl}/ListarFuncionarios`);
  }
}
