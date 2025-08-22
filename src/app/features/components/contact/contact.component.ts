import { Component } from '@angular/core';
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
  isLoading = false;

  sendEmail() {
    const { name, email, message } = this.contactForm;

    if (!name || !email || !message) {
      this.showValidation = true;
      setTimeout(() => {
        this.showValidation = false;
      }, 2000);
      return;
    }

    this.isLoading = true;

    emailjs
    .send('service_x4el81o', 'template_4sgse0k', { ...this.contactForm }, {
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
      this.isLoading = false;
    },
      (error: EmailJSResponseStatus) => {
        console.log('FAILED!', error.text);
        this.isLoading = false;
      }
    );
  }
}