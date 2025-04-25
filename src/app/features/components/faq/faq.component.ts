import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  faqs = [
    {
      question: 'Is housekeeping provided?',
      answer: 'Yes, housekeeping is provided every second day, including towel and linen changes. Additional cleaning services can be arranged for an extra fee.'
    },
    {
      question: 'Do you have a reception or staff available?',
      answer: 'We do not have a full-time reception, but staff are available on call to assist with any needs during your stay.'
    },
    {
      question: 'Do you offer airport transfers?',
      answer: 'We do not provide airport transfers directly, but we can arrange them through a trusted service provider based on current transfer rates. Please contact us in advance for assistance.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept both cash and credit/debit cards.'
    },
    {
      question: 'Is parking available?',
      answer: 'Yes, free private parking is available on site.'
    },
    {
      question: 'Do you provide baby cots or high chairs?',
      answer: 'Yes, baby cots and high chairs are available upon request. Kindly inform us in advance so we can prepare accordingly.'
    },
    {
      question: 'Is there a BBQ or outdoor cooking area?',
      answer: 'Yes, guests are welcome to use the BBQ area for outdoor cooking.'
    },
    {
      question: 'Is there a washing machine in the apartment?',
      answer: 'No, there is no washing machine in the apartment. However, laundry services are available at an additional cost.'
    },
    {
      question: 'Can I have visitors?',
      answer: 'We do not offer meals. However, a welcome pack with basic essentials can be arranged upon request.'
    },
    {
      question: 'What is the cancellation policy?',
      answer: 'Our cancellation policy varies depending on the type of booking. Please refer to your booking confirmation or contact us directly for specific details.'
    }
  ];

  expandedIndex: number | null = null;

  toggle(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
}
