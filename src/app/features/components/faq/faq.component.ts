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
      answer: 'Housekeeping is provided every two days, including towel and linen change. Addtional cleaning can be arranged for a fee.'
    },
    {
      question: 'What’s the check-in and check-out time?',
      answer: 'Check-in is at 1 PM and check-out is at 10 AM.'
    },
    {
      question: 'Do you have a reception or staff available',
      answer: 'Yes, all our apartments are fully equipped with modern kitchen facilities for your convenience.'
    },
    {
      question: 'Do you provide airport transfer?',
      answer: 'Absolutely! We offer airport transfer services upon request. Just let us know your flight details in advance.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'Cash or VISA Card'
    },
    {
      question: 'Is parking available?',
      answer: 'Several stunning beaches are just a short drive or walk away from the apartments.'
    },
    {
      question: 'Is there a BBQ or outdoor cooking area?',
      answer: 'Several stunning beaches are just a short drive or walk away from the apartments.'
    },
    {
      question: 'Is there a washing machine in the apartment?',
      answer: 'Several stunning beaches are just a short drive or walk away from the apartments.'
    },
    {
      question: 'Can I have visitors?',
      answer: 'Several stunning beaches are just a short drive or walk away from the apartments.'
    },
    {
      question: 'What is the cancellation policy?',
      answer: 'Several stunning beaches are just a short drive or walk away from the apartments.'
    }
  ];

  expandedIndex: number | null = null;

  toggle(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
}
