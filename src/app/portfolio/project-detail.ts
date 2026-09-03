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
    einvoice: {
      title: 'DG_EInvoice',
      subtitle: 'Enterprise E-Invoice & VAT Calculation Engine',
      videoUrl: '',
      techStack: [
        'Backend: C# & ASP.NET Core Web API (.NET 10)',
        'Frontend: React 19 (TypeScript, Vite, Tailwind CSS v4)',
        'Database & ORM: SQL Server, Entity Framework Core 10',
        'Architecture: Clean Architecture',
        'Compliance: NBR VDS Ready'
      ],
      architecture: 'Engineered for high-throughput billing, automated VAT determination, and regulatory fiscal compliance aligned with National Board of Revenue (NBR) digital seal standards. Built on ASP.NET Core Clean Architecture (.NET 10) with a reactive React 19 + TypeScript dashboard.',
      challenges: 'Enforcing exact fixed-point decimal arithmetic throughout its domain, persistence, and presentation layers to guarantee zero floating-point precision loss. For authenticity and anti-fraud verification, every issued invoice automatically computes and signs an immutable Visible Digital Seal (VDS) / Encrypted QR Payload, serialized into Base64 for instant scanning and cryptographic auditability.'
    },
    sms: {
      title: 'SMS',
      subtitle: 'Assignment & Submission Management System',
      videoUrl: '',
      techStack: [
        'Backend: C# & ASP.NET Core Web API (.NET 10), Clean Architecture',
        'Frontend: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4',
        'Database: PostgreSQL (Entity Framework Core 10)',
        'Authentication: JWT Bearer Tokens, BCrypt',
        'Deployment: Docker & Docker Compose'
      ],
      architecture: 'Built on a full-stack Clean Architecture, separating Domain, Application, Infrastructure, and API layers in the .NET 10 backend. The frontend utilizes Next.js App Router for optimal rendering performance. The entire application, including the PostgreSQL database, is containerized using Docker Compose for seamless standalone deployment.',
      challenges: 'Implementing robust role-based access control (RBAC) across three distinct roles (Admin, Teacher, Student) with complex visibility rules, such as restricting Teachers to only view and manage assignments for their Admin-allocated subjects. Ensured secure authentication using JWT and BCrypt, alongside comprehensive unit testing with xUnit and EF Core In-Memory DB.'
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
