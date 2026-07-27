import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.html'
})
export class Resume {
  protected readonly skills = [
    { category: 'Languages', items: ['C#', 'JavaScript', 'TypeScript', 'HTML/CSS'] },
    { category: 'Frameworks & SPAs', items: ['ASP.NET Core Web API', 'ASP.NET Core MVC', 'Angular', 'React'] },
    { category: 'Databases & ORMs', items: ['MS SQL Server', 'Entity Framework Core'] },
    { category: 'Architecture & Design', items: ['Clean Architecture', 'RESTful API', 'CQRS', 'MediatR'] },
    { category: 'Security & Tools', items: ['ASP.NET Core Identity', 'JWT Authentication', 'Git/GitHub', 'Postman', 'Swagger'] }
  ];

  protected readonly education = [
    { title: 'BBA in Accounting', institute: 'Naogaon Govt. College', body: 'National University', year: '2021', result: '2.45 / 4.00' },
    { title: 'HSC in Business Studies', institute: 'Naogaon Govt. College', body: 'Rajshahi Board', year: '2015', result: '4.33 / 5.00' },
    { title: 'SSC in Business Studies', institute: 'Khidirpur High School', body: 'Rajshahi Board', year: '2013', result: '4.19 / 5.00' }
  ];

  protected readonly references = [
    { name: 'Syed Zahidul Hassan', role: 'Consultant / Mentor', company: 'Show & Tell Consulting Ltd / IsDB-BISEW', contact: '01535110014', email: 'jewelmir81@gmail.com' },
    { name: 'Nishat Sharmeen', role: 'Faculty / Supervisor', company: 'Star Computer Systems / IsDB-BISEW', contact: '01681448998', email: 'nishatsharmeen@gmail.com' }
  ];
}
