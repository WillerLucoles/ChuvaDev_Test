import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/Sidebar/sidebar.component';
import { BoxResume } from './components/Resume/resume.component';
import { BoxApresentation } from './components/Apresentation/apresentation.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BoxResume,
    BoxApresentation,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
