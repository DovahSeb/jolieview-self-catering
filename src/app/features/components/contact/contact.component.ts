import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

interface ContactForm{
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: ContactForm = {
    name: '',
    email: '',
    message: '',
  };

  contactEmail = 'contact@jolieviewseychelles.com'
  showSuccess = false;
  showValidation = false;

  sendEmail() {
    const { name, email, message } = this.contactForm;

    if (!name || !email || !message) {
      this.showValidation = true;
      setTimeout(() => {
        this.showValidation = false;
      }, 2000);
      return;
    }

    emailjs
    .send('service_zx93o68', 'template_4sgse0k', { ...this.contactForm }, {
        publicKey: '-rugXXE4tnGPhX6jj',
    })
    .then(() => {
      this.showSuccess = true;
      this.contactForm = {
        name: '',
        email: '',
        message: '',
      };
      setTimeout(() => {
        this.showSuccess = false;
      }, 3000);
    },
      (error: EmailJSResponseStatus) => {
        console.log('FAILED!', error.text);
      }
    );
  }
}