import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiUrl  = 'https://localhost:7283/api/Cliente';

  constructor(private http: HttpClient) { }

  enviarCliente(data: any): Observable<any> {
    const caminhoComEndpoint = `${this.apiUrl}/AdicionarEmpresa`;  
    return this.http.post(caminhoComEndpoint, data);
  }

  listarClientes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/ListarClientes`);
  }
}
