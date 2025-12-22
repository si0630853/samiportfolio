import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { EducationComponent } from './pages/education/education.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TotalexprienceComponent } from './pages/totalexprience/totalexprience.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
export const routes: Routes = [
{
path: '',
component: MainLayoutComponent,
children: [
{ path: '', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'skills', component: SkillsComponent },
{ path: 'projects', component: ProjectsComponent },
{ path: 'education', component: EducationComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'experience', component: TotalexprienceComponent }
]
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
