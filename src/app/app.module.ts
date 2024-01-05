import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CoursesComponent } from './courses/courses.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Inter1JeeMaComponent } from './courses/courselist/inter1-jee-ma/inter1-jee-ma.component';
import { Inter1JeeMComponent } from './courses/courselist/inter1-jee-m/inter1-jee-m.component';
import { Inter2JeeMComponent } from './courses/courselist/inter2-jee-m/inter2-jee-m.component';
import { Inter2JeeMaComponent } from './courses/courselist/inter2-jee-ma/inter2-jee-ma.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MediaComponent } from './media/media.component';
import { FaqComponent } from './faq/faq.component';
import { ResolifeComponent } from './resolife/resolife.component';
import { ResolearnComponent } from './resolearn/resolearn.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CoursesComponent,
    HeaderComponent,
    FooterComponent,
    Inter1JeeMaComponent,
    Inter1JeeMComponent,
    Inter2JeeMComponent,
    Inter2JeeMaComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    GalleryComponent,
    MediaComponent,
    FaqComponent,
    ResolifeComponent,
    ResolearnComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
