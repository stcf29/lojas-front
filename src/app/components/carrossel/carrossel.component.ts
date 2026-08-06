import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './carrossel.component.html',
  styleUrl: './carrossel.component.css',
  host: { ngSkipHydration: 'true' }
})
export class CarrosselComponent {
  banners: { imagem: string }[] = [];

  ngOnInit() {
    this.carregarBanners();
  }

  @HostListener('window:resize')
  onResize() {
    this.carregarBanners();
  }

  carregarBanners() {

    const mobile = window.innerWidth <= 768;

    this.banners = mobile
      ? [
          { imagem: 'banner_topbaby_mobile.png' },
          { imagem: 'banner_vivaz_mobile.png' }
        ]
      : [
          { imagem: 'banner_topbaby.png' },
          { imagem: 'banner_vivaz.png' }
        ];

  }

}
