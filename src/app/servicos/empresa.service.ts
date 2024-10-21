import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private apiUrl = 'https://localhost:7283/api/Empresa';

  constructor(private http: HttpClient) { }

  enviarEmpresa(data: any): Observable<any> {
    const caminhoComEndpoint = `${this.apiUrl}/AdicionarEmpresa`;  
    return this.http.post(caminhoComEndpoint, data);
  }

  listarEmpresas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/ListarEmpresas`);
  }
}
