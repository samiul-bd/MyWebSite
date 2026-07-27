import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.html'
})
export class Blog {
  protected readonly articles = [
    {
      title: 'Optimizing Complex Queries in Entity Framework Core',
      date: 'June 18, 2026',
      readTime: '6 min read',
      category: 'Database Optimization',
      summary: 'Exploring strategies like compiled queries, split query execution, non-tracking transactions, and custom index utilization to optimize heavy query loads in EF Core.',
      highlights: [
        'How AsNoTracking() reduces DbContext memory foot-print.',
        'Splitting large relational joins with .AsSplitQuery().',
        'Writing raw SQL expressions when mapping complex aggregations.'
      ]
    },
    {
      title: 'Clean Architecture & CQRS in Modular Monoliths',
      date: 'May 24, 2026',
      readTime: '8 min read',
      category: 'Software Design',
      summary: 'A deep dive into structure isolation. How to use MediatR, command-query separation, and scoped context dependencies to build modular architectures without distributed microservices overhead.',
      highlights: [
        'Decoupling controllers from service boundaries with CQRS commands.',
        'Publishing transaction notifications across isolated domain sub-modules.',
        'Defining database isolation contexts while sharing common server storage.'
      ]
    },
    {
      title: 'Handling Optimistic Concurrency in High-Volume Systems',
      date: 'April 05, 2026',
      readTime: '5 min read',
      category: '.NET Systems',
      summary: 'Resolving database update conflicts using row versions, transaction wrappers, and optimistic state retry policies in ASP.NET Core applications.',
      highlights: [
        'Configuring Timestamp/RowVersion attributes in Entity Framework Core.',
        'Designing database retry pipelines for DbUpdateConcurrencyException.',
        'Balancing optimistic lock efficiency with database thread transaction queues.'
      ]
    }
  ];
}
