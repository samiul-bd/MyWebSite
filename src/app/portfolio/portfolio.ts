import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html'
})
export class Portfolio {
  protected readonly projects = [
    {
      id: 'ledgerai',
      title: 'LedgerAI',
      subtitle: 'Financial & Inventory Management System',
      description: 'An enterprise accounting application engineered with strict double-entry validations, real-time inventory ledger syncing, and secure JWT-based identity patterns.',
      github: 'https://github.com/samiul-bd/LedgerAi',
      live: 'https://ledgerai.demo'
    },
    {
      id: 'naogaaraam',
      title: 'Naogaar Aam',
      subtitle: 'E-commerce & ERP Monolith',
      description: 'A full-stack Clean Architecture monolith integrating Sales, Inventory, and CRM modules, utilizing CQRS (MediatR), Angular, and geodata pipelines.',
      github: 'https://github.com/samiul-bd/NaogarAam',
      live: 'https://naogaaraam.demo'
    },
    {
      id: 'einvoice',
      title: 'DG_EInvoice',
      subtitle: 'Enterprise E-Invoice & VAT Engine',
      description: 'A secure, NBR-compliant Electronic Invoicing & VAT calculation platform guaranteeing zero floating-point precision loss with Visible Digital Seal (VDS) integration.',
      github: 'https://github.com/samiul-bd/E-Invoice',
      live: 'https://einvoice.demo'
    },
    {
      id: 'sms',
      title: 'SMS',
      subtitle: 'Assignment & Submission Management',
      description: 'A full-stack, role-based educational web application for schools to manage courses, assignments, student submissions, and grading workflows.',
      github: 'https://github.com/samiul-bd/SMS',
      live: 'https://sms.demo'
    }
  ];

  constructor(private router: Router) {}

  protected onCardClick(projectId: string) {
    if (projectId.toLowerCase() === 'ledgerai' || projectId.toLowerCase() === 'einvoice' || projectId.toLowerCase() === 'sms') {
      this.router.navigate(['/portfolio', projectId]);
    }
  }
}
