export class Empresa {
    Id:string;
    NomeEmpresa:string;
    Cnpj:string;
    Setor:string;
    Id_Funcionarioe: string;

    constructor(Id:string, NomeEmpresa:string, Cnpj:string, Setor:string, Id_Funcionarioe: string){
        this.Id = Id;
        this.NomeEmpresa = NomeEmpresa;
        this.Cnpj = Cnpj;
        this.Setor = Setor;
        this.Id_Funcionarioe = Id_Funcionarioe;
    }
}
