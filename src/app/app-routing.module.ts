import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteDetailComponent } from './notes/note-detail/note-detail.component';
import { NoteHomeComponent } from './notes/note-home/note-home.component';

const routes: Routes = [
  {
    path: '',
    component: NoteHomeComponent
  },
  {
    path: 'note/:id',
    component: NoteDetailComponent
  },
  {
    path: 'note/create',
    component: NoteDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
