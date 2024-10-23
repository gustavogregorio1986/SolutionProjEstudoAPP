import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-empresa',
  standalone: true,
  imports: [FooterComponent, ReactiveFormsModule],
  templateUrl: './cadastro-empresa.component.html',
  styleUrl: './cadastro-empresa.component.css'
})
export class CadastroEmpresaComponent implements OnInit{

  cadastroEmpresaForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
     this.cadastroEmpresaForm = this.formBuilder.group({
      NomeEmpresa:['', Validators.required],
      Cnpj:['', Validators.required],
      Setor:['', Validators.required]
     });
  }
  
  onSubmit(): void {
     if(this.cadastroEmpresaForm.valid){
        console.log(this.cadastroEmpresaForm.value);
     }else{
        console.log('Formulário inválido');
     }
  }
}
