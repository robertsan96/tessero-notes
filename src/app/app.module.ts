import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftBarComponent } from './reusable/left-bar/left-bar.component';
import { TopBarComponent } from './reusable/top-bar/top-bar.component';
import { ContentWrapperComponent } from './reusable/content-wrapper/content-wrapper.component';
import { NotesComponent } from './notes/notes.component';
import { NoteDetailComponent } from './notes/note-detail/note-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftBarComponent,
    TopBarComponent,
    ContentWrapperComponent,
    NotesComponent,
    NoteDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
