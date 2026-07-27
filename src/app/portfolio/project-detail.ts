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
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
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
      subtitle: 'Baul Lyrics & Song Archiving Platform',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      techStack: [
        'ASP.NET Core Minimal APIs',
        'TypeScript & Tailwind CSS',
        'PostgreSQL (Relational Storage)',
        'Elasticsearch (Full-Text Search Engine)',
        'HTML5 Audio API (Streaming controls)'
      ],
      architecture: 'Uses a lightweight Microservice approach where audio streaming, search indexing, and user interactions are partitioned. Interprocess integration is handled via lightweight REST calls, backed by an Elasticsearch cluster matching songs dynamically based on phonetics.',
      challenges: 'Handling semantic searching across traditional Bengali song lyrics where spellings vary significantly between dialects. This was resolved by creating a custom Bengali word analyzer and character mapper in Elasticsearch, allowing phonetically close search phrases to yield exact lyric associations.'
    },
    planly: {
      title: 'Planly',
      subtitle: 'Agile Project Planner & Kanban Board',
      videoUrl: 'https://youtu.be/zCf_-MQ-GD0',
      techStack: [
        'ASP.NET Core (CQRS APIs)',
        'Angular with Tailwind CSS',
        'SQLite & EF Core (Lightweight local database storage)',
        'WebSockets (Real-time collaborative updates)',
        'HTML5 Drag and Drop API'
      ],
      architecture: 'A real-time workspace application designed with state-driven styling. The state transitions are broadcast to connected active clients via WebSockets, syncing project boards dynamically in real-time.',
      challenges: 'Eliminating jitter and race conditions when multiple users edit overlapping board tasks simultaneously. Resolved by applying Operational Transformation algorithms to task positional coordinates, combined with optimistic local state rendering for immediate UI feedback.'
    }
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = (params.get('id') || '').toLowerCase();
      this.projectId.set(id);

      const rawProject = this.projectDetailsMap[id];
      if (rawProject) {
        // Sanitize the YouTube URL to satisfy Angular security policy
        const sanitizedProject = {
          ...rawProject,
          videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl(rawProject.videoUrl)
        };
        this.projectData.set(sanitizedProject);
      } else {
        this.projectData.set(null);
      }
    });
  }
}
