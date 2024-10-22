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

  cadastroEmpresaForm!: FormGroup;

  constructor(){}

  ngOnInit(): void {
  }
}
