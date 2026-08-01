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
      id: 'lalon',
      title: 'Lalon',
      subtitle: 'Cognitive AI Architecture & Hybrid Engine',
      description: 'A hybrid C# and Python cognitive intelligence platform integrating Gemini API to simulate biological influences on reinforcement learning and adaptive decision models.',
      github: 'https://github.com/samiul-bd/Lalon',
      live: 'https://lalon.demo'
    }
  ];

  constructor(private router: Router) {}

  protected onCardClick(projectId: string) {
    if (projectId.toLowerCase() === 'ledgerai' || projectId.toLowerCase() === 'lalon') {
      this.router.navigate(['/portfolio', projectId]);
    }
  }
}
