import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftBarComponent } from './reusable/left-bar/left-bar.component';
import { NotesComponent } from './notes/notes.component';
import { NoteDetailComponent } from './notes/note-detail/note-detail.component';
import { NoteService } from './notes/note.service';
import { NoteHomeComponent } from './notes/note-home/note-home.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftBarComponent,
    NotesComponent,
    NoteDetailComponent,
    NoteHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [NoteService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
