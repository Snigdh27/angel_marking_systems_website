import { CommonModule } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Carousel} from '@fancyapps/ui';
import '@fancyapps/ui/dist/carousel/carousel.css';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  slides: any[] = [];
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: object,
  private http: HttpClient) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  initializeCarousel(){
    if (this.isBrowser) {
      // DOM-dependent code
      new Carousel(document.getElementById('cardSlider'), {
        Navigation: {
          prevTpl: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 5l-7 7 7 7"/><path d="M4 12h16"/></svg>`,
          nextTpl: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 12h16"/><path d="M13 5l7 7-7 7"/></svg>`,
        },
        infinite: true,
        center: false,
        slidesPerPage: 'auto',
        transition: false,
      });
    }
  }

  ngOnInit(): void {

    this.http.get<any[]>('assets/product.json').subscribe((data) => {
      this.slides = data;
      this.initializeCarousel();
    });
  }
}
