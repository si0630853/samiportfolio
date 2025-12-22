import { Component } from '@angular/core';
interface Education {
  level: string;
  institute: string;
  status: string;
  year?: string;
  highlight?: boolean;
}
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationList: Education[] = [
    {
      level: 'Matriculation',
      institute: 'Anjum Secondary School',
      status: 'Completed',
      year: '2020'
    },
    {
      level: 'Intermediate',
      institute: 'Ziauddin College',
      status: 'Completed',
      year: '2023'
    },
    {
      level: 'Bachelor of Science in Computer Science (BSCS)',
      institute: 'ILMA University',
      status: 'In Progress',
      year: 'Expected 2027',
      highlight: true
    }
  ];
}
