import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-cliente',
  standalone: true,
  imports: [FooterComponent, ReactiveFormsModule],
  templateUrl: './cadastro-cliente.component.html',
  styleUrl: './cadastro-cliente.component.css'
})
export class CadastroClienteComponent implements OnInit{

  cadastroClienteForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.cadastroClienteForm = this.formBuilder.group({
      NomeEmpresa:['', Validators.required],
      Setor:['', Validators.required],
      Tipo:['', Validators.required]
    })
  }

  onSubmit(): void {
      if(this.cadastroClienteForm.valid){
        console.log(this.cadastroClienteForm.value);
      }else{
        console.log('Formulário inválido');
      }
  }
}
