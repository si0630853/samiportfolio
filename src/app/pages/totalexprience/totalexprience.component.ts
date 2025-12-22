import { Component } from '@angular/core';

@Component({
  selector: 'app-totalexprience',
  templateUrl: './totalexprience.component.html',
  styleUrls: ['./totalexprience.component.css']
})
export class TotalexprienceComponent {
  experienceYears = 3;
  company = 'Persistent Solutions';

  skills = [
    'Angular',
    'ASP.NET Core Web APIs',
    'SQL Server',
    'PostgreSQL',
    'GitHub',
    'Quality Assurance',
    'Business Analysis',
    'Functions & Stored Procedures'
  ];
}
