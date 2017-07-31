import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JobComponent } from './job/job.component';

import { ServicesService } from './services.service';
import { JobService } from './job/job.service';
import { JobListComponent } from './job/job-list/job-list.component';
import { JobItemComponent } from './job/job-list/job-item/job-item.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    JobListComponent,
    JobItemComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ServicesService, JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
