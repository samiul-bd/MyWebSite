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
      subtitle: 'Baul Lyrics & Song Archiving Platform',
      description: 'A digital preservation and lyrics semantic indexing platform for traditional Baul songs, featuring advanced search filters and interactive audio stream previewers.',
      github: 'https://github.com/samiul-bd/Lalon',
      live: 'https://lalon.demo'
    },
    {
      id: 'planly',
      title: 'Planly',
      subtitle: 'Agile Project Planner & Kanban Board',
      description: 'A responsive task tracking board with real-time drag-and-drop actions, column configurations, priority matrix overlays, and detailed analytics dashboards.',
      github: 'https://github.com/samiul-bd/Planly',
      live: 'https://planly.demo'
    }
  ];

  constructor(private router: Router) {}

  protected onCardClick(projectId: string) {
    this.router.navigate(['/portfolio', projectId]);
  }
}
