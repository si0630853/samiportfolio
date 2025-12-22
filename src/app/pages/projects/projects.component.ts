import { Component } from '@angular/core';

interface Project {
  title: string;
  short: string;
  bullets: string[];
  tags: string[];
  image: string;
  highlight?: boolean;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects: Project[] = [
       {
      title: 'Invoice & Billing System',
      short: 'Automated invoicing and billing system with real-time financial tracking.',
      bullets: [
        'Invoice Generation',
        'Receivable & Payable Management',
        'Financial Reports'
      ],
      tags: ['Ng-Zorro', 'REST APIs', 'Angular'],
      image: 'assets/images/Invoice.png'
    },
    {
      title: 'Construction Management System',
      short: 'Project-based system for managing construction workflows, costs, and reports.',
      bullets: [
        'Project Cost Tracking',
        'Material & Expense Management',
        'Progress & Financial Reports'
      ],
      tags: ['Angular', 'ASP.NET Core', 'PostgreSQL'],
      image: 'assets/images/cunstruction.png'
    },
    {
      title: 'Financial Management System (FMS)',
      short: 'Enterprise-level financial system designed for accurate accounting and detailed reporting.',
      bullets: [
        'General Ledger (GL) Reports',
        'Trial Balance & Aging Reports',
        'Customer & Vendor Ledgers'
      ],
      tags: ['Angular', 'ASP.NET Core', 'PostgreSQL'],
      image: 'assets/images/financial.avif',
      highlight: true
    },
    {
      title: 'Doctor Management System',
      short: 'Complete management solution for doctors, patients, and appointment workflows.',
      bullets: [
        'Doctor & Patient Records',
        'Appointment Scheduling',
        'Billing & Reporting'
      ],
      tags: ['Angular', 'ASP.NET Core', 'REST APIs'],
      image: 'assets/images/doctor.jpg'
    },
    {
      title: 'Flour Management System',
      short: 'Inventory, sales, and reporting system for flour mills and distributors.',
      bullets: [
        'Stock & Inventory Tracking',
        'Sales & Purchase Management',
        'Daily & Monthly Reports'
      ],
      tags: ['Angular', 'ASP.NET Core', 'SQL Server'],
      image: 'assets/images/Sheikh.jpg'
    },
  ];

}
