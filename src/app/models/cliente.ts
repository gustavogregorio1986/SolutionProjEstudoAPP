export class Cliente {
    Id:string;
    NomeCliente:string;
    Setor:string;
    Tipo:string;
    Id_Empresa:string;

    constructor(Id:string, NomeCliente:string, Setor:string, Tipo:string, Id_Empresa:string){
        this.Id = Id;
        this.NomeCliente = NomeCliente;
        this.Setor = Setor;
        this.Tipo = Tipo;
        this.Id_Empresa = Id_Empresa; 
    }
}
