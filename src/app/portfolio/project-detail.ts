import { Component, OnInit, signal, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink],
  templateUrl: './project-detail.html'
})
export class ProjectDetail implements OnInit {
  private readonly sanitizer = inject(DomSanitizer);

  protected readonly projectId = signal<string>('');
  protected readonly projectData = signal<any>(null);

  private readonly projectDetailsMap: Record<string, any> = {
    ledgerai: {
      title: 'LedgerAI',
      subtitle: 'Financial & Inventory Management System',
      videoUrl: 'https://www.youtube.com/embed/zCf_-MQ-GD0',
      techStack: [
        'Backend: C#, ASP.NET Core Web API',
        'Frontend: React (TypeScript)',
        'Database & ORM: SQL Server, Entity Framework Core (EF Core)',
        'Architecture: Clean Architecture, CQRS, MediatR',
        'Patterns: Unit of Work, Generic Repository Pattern'
      ],
      architecture: 'Engineered with Clean Architecture, strictly divided into four decoupled layers (Domain, Application, Infrastructure, API) to isolate core business rules. Integrated CQRS via MediatR to separate write mutations from read queries. Double-entry accounting is modeled fundamentally in the Domain layer with strict financial constraints (Assets, Liabilities, Equity, Revenue, Expense). Inventory movements and financial journal entries are bound together to ensure absolute atomic consistency (both succeed or roll back entirely), alongside a unified BaseEntity managing standardized audit trails and soft-deletes.',
      challenges: 'An initial Generic Repository implementation wrapped EF Core state-tracking methods in Task.Run—a severe anti-pattern causing unnecessary async overhead, thread-pool starvation, and performance degradation in high-transaction operations. Resolved by refactoring state changes to execute synchronously, reserving async/await exclusively for database I/O calls. Furthermore, data persistence (SaveChanges) was completely decoupled from the repository and managed via a dedicated Unit of Work pattern to enforce transaction atomicity across multiple repositories.'
    },
    naogaaraam: {
      title: 'Naogaar Aam',
      subtitle: 'E-commerce & ERP Monolith',
      videoUrl: '',
      techStack: [
        'C# & ASP.NET Core (Monolithic API Engine)',
        'Angular (SPA Client Interface)',
        'SQL Server & Entity Framework Core (Storage & ORM Mapping)',
        'MediatR & CQRS Pattern (Internal Application Message bus)',
        'Geodata Integration & Tracking Pipelines'
      ],
      architecture: 'Structured as a modular monolith following clean architecture guidelines. Feature folders contain scoped business flows. An internal event-driven message pipeline publishes checkouts to inventory and financial bookkeeping modules seamlessly, maintaining strict module independence.',
      challenges: 'Optimizing geo-location data queries to evaluate marketing campaigns and ad metrics without degrading search speeds. Resolved this by building a dedicated Redis caching pipeline for tracking coordinates and using spatial indices in MS SQL Server to perform geographic boundaries distance computations in sub-millisecond durations.'
    },
    lalon: {
      title: 'Lalon',
      subtitle: 'Cognitive AI Architecture & Hybrid Engine',
      videoUrl: '',
      techStack: [
        'Core Language & Platform: C# & Python Hybrid Architecture',
        'AI Integration: Gemini API Engine',
        'Machine Learning: Reinforcement Learning & Simulation Models',
        'Data Processing: Asynchronous IPC & State Management'
      ],
      architecture: 'Project Lalon is engineered as a hybrid C# and Python cognitive intelligence system designed to simulate biological influences and states on artificial intelligence learning processes. It leverages C# for high-performance backbone infrastructure and state management, while Python handles machine learning computations and neural model adaptations, integrated seamlessly with the Gemini API to evaluate and guide dynamic agent behaviors.',
      challenges: 'Synchronizing state and data communication efficiently across a multi-language boundary (C# core runtime and Python AI processing pipelines) without introducing latency bottlenecks during real-time reinforcement learning loops. This was resolved by implementing a structured, asynchronous inter-process communication protocol paired with decoupled state caching layers to ensure fluid feedback loops and stable biological simulation metrics.'
    }
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = (params.get('id') || '').toLowerCase();
      this.projectId.set(id);

      const rawProject = this.projectDetailsMap[id];
      if (rawProject && rawProject.videoUrl) {
        const sanitizedProject = {
          ...rawProject,
          videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl(rawProject.videoUrl)
        };
        this.projectData.set(sanitizedProject);
      } else if (rawProject) {
        this.projectData.set(rawProject);
      } else {
        this.projectData.set(null);
      }
    });
  }
}
