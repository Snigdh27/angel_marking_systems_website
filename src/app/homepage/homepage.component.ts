import { Component } from '@angular/core';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { ProductsComponent } from '../products/products.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [AboutusComponent, ProductsComponent, ContactUsComponent, FooterComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  
}
