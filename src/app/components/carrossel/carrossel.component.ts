import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-carrossel',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './carrossel.component.html',
  styleUrl: './carrossel.component.css',
  host: { ngSkipHydration: 'true' }
})
export class CarrosselComponent {

  readonly banners = [
  { imagem: 'banner1.jpg' },
  { imagem: 'banner2.jpg' },
  { imagem: 'banner3.jpg' }
];

constructor() {
}

}
