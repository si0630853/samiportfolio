import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { EducationComponent } from './pages/education/education.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AnimatedCardComponent } from './shared/components/animated-card/animated-card.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SectionTitleComponent } from './shared/components/section-title/section-title.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { TotalexprienceComponent } from './pages/totalexprience/totalexprience.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    EducationComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    AnimatedCardComponent,
    SectionTitleComponent,
    TotalexprienceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NzCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
