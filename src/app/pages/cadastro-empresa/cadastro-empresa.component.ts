import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-empresa',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './cadastro-empresa.component.html',
  styleUrl: './cadastro-empresa.component.css'
})
export class CadastroEmpresaComponent implements OnInit{

  cadastroEmpresaForm!: FormGroup;

  constructor(){}

  ngOnInit(): void {
  }
}
