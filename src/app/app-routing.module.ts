import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeroComponent } from './hero/hero.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', component: HeroComponent },            // Home
  { path: 'about', component: AboutComponent },      // /about
  { path: 'projects', component: ProjectsComponent },// /projects
  { path: 'contact', component: ContactComponent },  // /contact
  { path: '**', redirectTo: '' }                     // Redirige todo lo desconocido a home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
