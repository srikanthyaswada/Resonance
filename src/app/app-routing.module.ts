import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CoursesComponent } from './courses/courses.component';
import { Inter1JeeMaComponent } from './courses/courselist/inter1-jee-ma/inter1-jee-ma.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogComponent } from './blog/blog.component';
import { MediaComponent } from './media/media.component';
import { FaqComponent } from './faq/faq.component';
import { ResolifeComponent } from './resolife/resolife.component';
import { ResolearnComponent } from './resolearn/resolearn.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'course', component: CoursesComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'resolife', component: ResolifeComponent },
  { path: 'resolearn', component: ResolearnComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },

  { path: 'inter1-jee-main-adv', component: Inter1JeeMaComponent },

  { path: 'gallery', component: GalleryComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'media', component: MediaComponent },
  { path: 'faq', component: FaqComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
