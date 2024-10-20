import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  imagemUrl = 'https://quikdev.com.br/wp-content/uploads/2022/04/empresa-de-desenvolvimento-de-software.png'
  imagemAlt = 'desenvolviment0o de software'
}
