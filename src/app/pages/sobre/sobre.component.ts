import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent {
    imagemUrl = 'https://tse1.mm.bing.net/th?id=OIP.hd99Btz65-pUyzp2dTOYNgHaEK&pid=Api&P=0&h=180'
    imagemAlt = 'desenvolvimento de sistemas'
}
