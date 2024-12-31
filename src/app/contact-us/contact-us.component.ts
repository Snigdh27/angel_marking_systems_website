import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs,{ type EmailJSResponseStatus } from '@emailjs/browser';

interface ContactForm {
  name : string,
  email : string,
  phone : string,
  message : string
}

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

  form : ContactForm = {
    name : '',
    email : '',
    phone : '',
    message : ''
  }

  send(){
    console.log(this.form);
    emailjs.send('service_0q01nou','template_yoismhb', {...this.form},{
      publicKey : 'x3i6fmU5h_-5B6cE5'
    })
  }
}
