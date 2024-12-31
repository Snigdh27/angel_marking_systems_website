import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'/;

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  current_year = new Date().getFullYear();
}
