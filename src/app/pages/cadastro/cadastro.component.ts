import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FooterComponent, ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent implements OnInit {

  cadastroForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      NomeFuncionario: ['', Validators.required],
      EmailFuncionario: ['', Validators.required],
      Sexo: ['', Validators.required],
      Salario: ['', Validators.required] 
     });
  }

  onSubmit(): void {
    if (this.cadastroForm.valid) {
      console.log(this.cadastroForm.value);
      
    } else {
      console.log('Formulário inválido');
    }
  }
}
